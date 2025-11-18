import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import zanzibarAerial from "@/assets/zanzibar-aerial.jpg";
import zanzibarSunsetDhow from "@/assets/zanzibar-sunset-dhow.jpg";
import zanzibarBeachPier from "@/assets/zanzibar-beach-pier.jpg";
import zanzibarPalmTrees from "@/assets/zanzibar-palm-trees.jpg";
import zanzibarSandbank from "@/assets/zanzibar-sandbank.jpg";
import zanzibarRockyCoast from "@/assets/zanzibar-rocky-coast.jpg";
import zanzibarPalmSky from "@/assets/zanzibar-palm-sky.jpg";

const experiences = [
  {
    id: "experience-1",
    title: "Zanzibar 2 Days / 1 Night Package",
    image: zanzibarSunsetDhow,
    content: `Short on time but still want to experience the heart of Zanzibar? This 2-day package is perfect for travelers with limited time who still want to explore, learn, and relax. Enjoy a comfortable stay at Mizingani Seafront Hotel in historic Stone Town, round-trip airport transfers, and carefully selected activities that showcase Zanzibar's culture, history, and natural beauty. 

Your experience includes a Spice Farm Tour, a visit to Prison Island with Snorkeling, and a guided Stone Town tour with shopping. We coordinate the schedule with your flight times, ensuring a smooth and enjoyable stay from start to finish. Contact us via our Inquiry page or WhatsApp to customize the itinerary to your needs.`,
  },
  {
    id: "experience-2",
    title: "Zanzibar 3 Days / 2 Nights Package",
    image: zanzibarBeachPier,
    content: `Visiting Zanzibar for just a few days? This 3-day package is designed to give you a full and meaningful experience without the stress of planning. Your stay at Mizingani Seafront Hotel in historic Stone Town includes airport transfers, full-board meals, and guided excursions—allowing you to relax and enjoy Zanzibar's culture, history, and natural beauty. 

Over the three days, you'll explore the flavors of a Spice Farm Tour, learn the stories and architecture of Stone Town, and visit Prison Island to see the Aldabra giant tortoises. We align all activities with your arrival and departure times to ensure a seamless and enjoyable trip. Contact us via our Inquiry page or WhatsApp to customize the itinerary to your needs.`,
  },
  {
    id: "experience-3",
    title: "Zanzibar 4 Days / 3 Nights Package",
    image: zanzibarPalmTrees,
    content: `Have a bit more time to explore Zanzibar? This 4-day package is designed to give you a rich and memorable experience without the stress of planning. Your stay at Mizingani Seafront Hotel in Stone Town includes round-trip airport transfers, full-board meals, and immersive guided activities—allowing you to fully enjoy Zanzibar's culture, cuisine, and tropical beauty. 

During your stay, you'll snorkel and sail the clear waters of Safari Blue, take in the spices and aromas of a Spice Farm Tour, uncover history on a guided Stone Town Tour, and visit Prison Island to meet the Aldabra giant tortoises. All activities are scheduled around your arrival and departure for a smooth, easy trip. Contact us via WhatsApp or Email to customize this package to your interests.`,
  },
  {
    id: "experience-4",
    title: "Zanzibar 5 Days / 4 Nights Package",
    image: zanzibarSandbank,
    content: `Planning to spend 5 days in Zanzibar? This package is designed to make your stay relaxing, immersive, and completely stress-free. Your accommodation will be at Smiles Beach Hotel on the beautiful shores of Nungwi, with airport transfers, full-board meals, and guided activities all included—so you can simply enjoy your vacation while we handle the details. 

Across five days, you'll sail the clear waters of Safari Blue, explore the aromatic plantations of a Spice Farm Tour, discover the rich history of Stone Town, and visit Prison Island to see the Aldabra giant tortoises. You'll also enjoy a day on the southeast coast with snorkeling and a memorable lunch at the iconic Rock Restaurant overlooking the ocean. All activities are scheduled around your arrival and departure to ensure a seamless experience. Contact us via our Inquiry page or WhatsApp to customize the itinerary to your needs.`,
  },
  {
    id: "experience-5",
    title: "Zanzibar 6 Days / 5 Nights Package",
    image: zanzibarRockyCoast,
    content: `Staying in Zanzibar for 6 days? This package is designed to give you the perfect balance of adventure, culture, and relaxation—all without the stress of planning. Enjoy your stay at Smiles Beach Hotel on beautiful Nungwi Beach, complete with round-trip airport transfers, full-board meals, and guided excursions to help you experience the very best of Zanzibar. 

Throughout your trip, you'll sail and snorkel the crystal waters of Safari Blue, explore the aromatic plantations of a Spice Farm Tour, discover the history of Stone Town, and visit Prison Island to meet the Aldabra giant tortoises. You'll also have a full relaxing day to unwind by the ocean at your resort. Later in the trip, enjoy snorkeling at Blue Lagoon and a memorable lunch with ocean views at the iconic Rock Restaurant, with time to explore nearby beaches like Paje and Jambiani. 

All activities are scheduled around your arrival and departure for a smooth, enjoyable experience. Contact us via our Inquiry page or WhatsApp to customize the itinerary to your needs.`,
  },
  {
    id: "experience-6",
    title: "Zanzibar 7 Days / 6 Nights Package",
    image: zanzibarPalmSky,
    content: `Planning a full week in Zanzibar? This 7-day package is designed to give you a complete and stress-free island experience—from rich cultural history to white-sand beaches and crystal-clear waters. Your stay includes time in Stone Town at Mizingani Seafront Hotel, followed by days of ocean relaxation at Smiles Beach Hotel in Nungwi. With airport transfers, full-board meals, and guided activities included, you can simply enjoy the journey while we take care of the details. 

Across your week you will explore Stone Town's history, tour a Spice Farm, and visit Prison Island to meet the Aldabra giant tortoises. You'll also sail and snorkel on the stunning Safari Blue excursion, relax on Nungwi Beach, and enjoy a highlight experience with snorkeling and lunch at the iconic Rock Restaurant overlooking the Indian Ocean. All activities are planned around your arrival and departure to ensure a smooth and relaxing stay. Contact us via our Inquiry page or WhatsApp to customize the itinerary to your needs.`,
  },
];

const ZanzibarIsland = () => {
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = (experienceId: string) => {
    if (experienceId === "experience-1") {
      const cartItem = {
        product: {
          node: {
            id: "gid://shopify/Product/10855516635329",
            title: "Zanzibar 2 Days / 1 Night Package",
            description: experiences[0].content,
            handle: "zanzibar-2-days-1-night-package",
            priceRange: {
              minVariantPrice: {
                amount: "1400.00",
                currencyCode: "USD"
              }
            },
            images: {
              edges: [{
                node: {
                  url: zanzibarSunsetDhow,
                  altText: "Zanzibar sunset with traditional dhow boat"
                }
              }]
            },
            variants: {
              edges: [{
                node: {
                  id: "gid://shopify/ProductVariant/49675974869185",
                  title: "Default Title",
                  price: {
                    amount: "1400.00",
                    currencyCode: "USD"
                  },
                  availableForSale: true,
                  selectedOptions: []
                }
              }]
            },
            options: []
          }
        },
        variantId: "gid://shopify/ProductVariant/49675974869185",
        variantTitle: "Default Title",
        price: {
          amount: "1400.00",
          currencyCode: "USD"
        },
        quantity: 1,
        selectedOptions: []
      };
      
      addItem(cartItem);
      toast.success("Added to cart", {
        description: "Zanzibar 2 Days / 1 Night Package has been added to your cart"
      });
    } else if (experienceId === "experience-2") {
      const cartItem = {
        product: {
          node: {
            id: "gid://shopify/Product/10855517356225",
            title: "Zanzibar 3 Days / 2 Nights Package",
            description: experiences[1].content,
            handle: "zanzibar-3-days-2-nights-package",
            priceRange: {
              minVariantPrice: {
                amount: "2000.00",
                currencyCode: "USD"
              }
            },
            images: {
              edges: [{
                node: {
                  url: zanzibarBeachPier,
                  altText: "Zanzibar beach pier with turquoise water"
                }
              }]
            },
            variants: {
              edges: [{
                node: {
                  id: "gid://shopify/ProductVariant/49675977097409",
                  title: "Default Title",
                  price: {
                    amount: "2000.00",
                    currencyCode: "USD"
                  },
                  availableForSale: true,
                  selectedOptions: []
                }
              }]
            },
            options: []
          }
        },
        variantId: "gid://shopify/ProductVariant/49675977097409",
        variantTitle: "Default Title",
        price: {
          amount: "2000.00",
          currencyCode: "USD"
        },
        quantity: 1,
        selectedOptions: []
      };
      
      addItem(cartItem);
      toast.success("Added to cart", {
        description: "Zanzibar 3 Days / 2 Nights Package has been added to your cart"
      });
    } else if (experienceId === "experience-3") {
      const cartItem = {
        product: {
          node: {
            id: "gid://shopify/Product/10855517454529",
            title: "Zanzibar 4 Days / 3 Nights Package",
            description: experiences[2].content,
            handle: "zanzibar-4-days-3-nights-package",
            priceRange: {
              minVariantPrice: {
                amount: "2500.00",
                currencyCode: "USD"
              }
            },
            images: {
              edges: [{
                node: {
                  url: zanzibarPalmTrees,
                  altText: "Zanzibar palm trees against blue sky"
                }
              }]
            },
            variants: {
              edges: [{
                node: {
                  id: "gid://shopify/ProductVariant/49675977261249",
                  title: "Default Title",
                  price: {
                    amount: "2500.00",
                    currencyCode: "USD"
                  },
                  availableForSale: true,
                  selectedOptions: []
                }
              }]
            },
            options: []
          }
        },
        variantId: "gid://shopify/ProductVariant/49675977261249",
        variantTitle: "Default Title",
        price: {
          amount: "2500.00",
          currencyCode: "USD"
        },
        quantity: 1,
        selectedOptions: []
      };
      
      addItem(cartItem);
      toast.success("Added to cart", {
        description: "Zanzibar 4 Days / 3 Nights Package has been added to your cart"
      });
    } else if (experienceId === "experience-4") {
      const cartItem = {
        product: {
          node: {
            id: "gid://shopify/Product/10855518404801",
            title: "Zanzibar 5 Days / 4 Nights Package",
            description: experiences[3].content,
            handle: "zanzibar-5-days-4-nights-package",
            priceRange: {
              minVariantPrice: {
                amount: "3000.00",
                currencyCode: "USD"
              }
            },
            images: {
              edges: [{
                node: {
                  url: zanzibarSandbank,
                  altText: "Zanzibar sandbank with turquoise water"
                }
              }]
            },
            variants: {
              edges: [{
                node: {
                  id: "gid://shopify/ProductVariant/49675978834113",
                  title: "Default Title",
                  price: {
                    amount: "3000.00",
                    currencyCode: "USD"
                  },
                  availableForSale: true,
                  selectedOptions: []
                }
              }]
            },
            options: []
          }
        },
        variantId: "gid://shopify/ProductVariant/49675978834113",
        variantTitle: "Default Title",
        price: {
          amount: "3000.00",
          currencyCode: "USD"
        },
        quantity: 1,
        selectedOptions: []
      };
      
      addItem(cartItem);
      toast.success("Added to cart", {
        description: "Zanzibar 5 Days / 4 Nights Package has been added to your cart"
      });
    } else if (experienceId === "experience-5") {
      const cartItem = {
        product: {
          node: {
            id: "gid://shopify/Product/10855518470337",
            title: "Zanzibar 6 Days / 5 Nights Package",
            description: experiences[4].content,
            handle: "zanzibar-6-days-5-nights-package",
            priceRange: {
              minVariantPrice: {
                amount: "3500.00",
                currencyCode: "USD"
              }
            },
            images: {
              edges: [{
                node: {
                  url: zanzibarRockyCoast,
                  altText: "Zanzibar rocky coastline with turquoise water"
                }
              }]
            },
            variants: {
              edges: [{
                node: {
                  id: "gid://shopify/ProductVariant/49675978899649",
                  title: "Default Title",
                  price: {
                    amount: "3500.00",
                    currencyCode: "USD"
                  },
                  availableForSale: true,
                  selectedOptions: []
                }
              }]
            },
            options: []
          }
        },
        variantId: "gid://shopify/ProductVariant/49675978899649",
        variantTitle: "Default Title",
        price: {
          amount: "3500.00",
          currencyCode: "USD"
        },
        quantity: 1,
        selectedOptions: []
      };
      
      addItem(cartItem);
      toast.success("Added to cart", {
        description: "Zanzibar 6 Days / 5 Nights Package has been added to your cart"
      });
    } else if (experienceId === "experience-6") {
      const cartItem = {
        product: {
          node: {
            id: "gid://shopify/Product/10855518568641",
            title: "Zanzibar 7 Days / 6 Nights Package",
            description: experiences[5].content,
            handle: "zanzibar-7-days-6-nights-package",
            priceRange: {
              minVariantPrice: {
                amount: "4000.00",
                currencyCode: "USD"
              }
            },
            images: {
              edges: [{
                node: {
                  url: zanzibarPalmSky,
                  altText: "Zanzibar palm trees reaching to the sky"
                }
              }]
            },
            variants: {
              edges: [{
                node: {
                  id: "gid://shopify/ProductVariant/49675978997953",
                  title: "Default Title",
                  price: {
                    amount: "4000.00",
                    currencyCode: "USD"
                  },
                  availableForSale: true,
                  selectedOptions: []
                }
              }]
            },
            options: []
          }
        },
        variantId: "gid://shopify/ProductVariant/49675978997953",
        variantTitle: "Default Title",
        price: {
          amount: "4000.00",
          currencyCode: "USD"
        },
        quantity: 1,
        selectedOptions: []
      };
      
      addItem(cartItem);
      toast.success("Added to cart", {
        description: "Zanzibar 7 Days / 6 Nights Package has been added to your cart"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation bgColor="--destinations-bg" />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-start justify-center pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${zanzibarAerial})` }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        {/* Scroll Indicator */}
        <a 
          href="#experiences" 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-10"
        >
          <ChevronDown size={40} strokeWidth={2} />
        </a>
      </section>

      {/* Experiences Header Band */}
      <section 
        id="experiences"
        className="bg-white pt-20 pb-10"
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center min-h-[120px]">
          <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-[#3d2418]">
            Experiences
          </h2>
        </div>
      </section>

      {/* Experience Cards with Accordion */}
      <section className="w-full">
        <Accordion type="single" collapsible className="w-full">
          {experiences.map((experience) => (
            <AccordionItem key={experience.id} value={experience.id} className="border-none">
              <div className="relative w-full overflow-hidden h-64 md:h-80">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${experience.image})` }}
                >
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                
                <AccordionTrigger className="relative z-10 h-full flex items-center justify-start px-8 md:px-16 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center w-full">
                    <ChevronDown className="h-8 w-8 text-white mr-6 shrink-0 transition-transform duration-200" />
                    <h3 className="font-playfair text-white text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-lg text-left">
                      {experience.title}
                    </h3>
                  </div>
                </AccordionTrigger>
              </div>
              
              <AccordionContent className="bg-white">
                <div className="px-8 md:px-16 py-8">
                  <p className="text-[#3d2418] leading-relaxed whitespace-pre-line text-justify">
                    {experience.content}
                  </p>
                  {(experience.id === "experience-1" || experience.id === "experience-2" || experience.id === "experience-3" || experience.id === "experience-4" || experience.id === "experience-5" || experience.id === "experience-6") && (
                    <div className="flex justify-end mt-6">
                      <Button 
                        onClick={() => handleAddToCart(experience.id)}
                        size="lg"
                      >
                        {experience.id === "experience-1" ? "Book Now - $1,400" : 
                         experience.id === "experience-2" ? "Book Now - $2,000" : 
                         experience.id === "experience-3" ? "Book Now - $2,500" : 
                         experience.id === "experience-4" ? "Book Now - $3,000" : 
                         experience.id === "experience-5" ? "Book Now - $3,500" : 
                         experience.id === "experience-6" ? "Book Now - $4,000" : 
                         "Book Now"}
                      </Button>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default ZanzibarIsland;
