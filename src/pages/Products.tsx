import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Loader2, ShoppingCart } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to load tour packages");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) {
      toast.error("This tour package is not available");
      return;
    }

    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart!", {
      description: `${product.node.title} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tour Packages
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our carefully curated safari and adventure packages
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No tour packages available yet</h2>
            <p className="text-muted-foreground">
              Check back soon for exciting safari adventures!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const { node } = product;
              const image = node.images.edges[0]?.node;
              const price = node.priceRange.minVariantPrice;
              
              return (
                <Card key={node.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.altText || node.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{node.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {node.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">
                      {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
