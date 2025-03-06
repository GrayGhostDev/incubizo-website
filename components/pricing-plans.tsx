"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

// Plan data based on the image
const plans = [
  {
    id: "virtual-office",
    title: "Virtual Office/Mailing Address for Your Business",
    price: "$65.00",
    period: "every 1 month",
    description: "Incubizo in Ferndale can be your business address. Replace your home address, grow until you want ...",
    features: [],
    hasReadMore: true
  },
  {
    id: "vehicle-parking",
    title: "Vehicle Parking - on site 24/7",
    price: "$100.00",
    period: "every 1 month",
    description: "On site parking 24/7 for a vehicle that fits into a single parking space",
    features: ["EV Charging stations are ..."],
    hasReadMore: true
  },
  {
    id: "coworking-5day",
    title: "Coworking + 5 day access",
    price: "$140.00",
    period: "every 1 month",
    description: "This membership tier includes:",
    features: ["Onsite parking for you and your guests"],
    hasReadMore: true
  },
  {
    id: "coworking-7day",
    title: "Coworking + meet + 7 day access",
    price: "$195.00",
    period: "every 1 month",
    description: "This membership tier includes:",
    features: ["Onsite parking for you and your guests"],
    hasReadMore: true
  }
];

export default function PricingPlans() {
  // State for tracking which plans have been agreed to
  const [agreements, setAgreements] = useState<Record<string, boolean>>({});

  const toggleAgreement = (planId: string) => {
    setAgreements(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our plans</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col bg-white shadow-sm">
                <CardHeader className="pb-4 pt-6 px-6">
                  <h3 className="text-base font-medium">{plan.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow px-6">
                  <div className="mb-4">
                    <p className="text-3xl font-bold">{plan.price}</p>
                    <p className="text-sm text-muted-foreground">{plan.period}</p>
                  </div>
                  <div className="space-y-4 text-sm">
                    <p>{plan.description}</p>
                    {plan.features.length > 0 && (
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2">◦</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {plan.hasReadMore && (
                      <Button variant="link" className="p-0 h-auto text-primary text-sm">
                        Read more
                      </Button>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-stretch pt-4 pb-6 px-6 space-y-4 mt-auto">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id={`terms-${plan.id}`} 
                      checked={agreements[plan.id] || false}
                      onCheckedChange={() => toggleAgreement(plan.id)}
                    />
                    <Label htmlFor={`terms-${plan.id}`} className="text-xs text-muted-foreground">
                      I agree to these terms and conditions
                    </Label>
                  </div>
                  <Button 
                    className="w-full bg-amber-300 hover:bg-amber-400 text-black font-normal"
                    disabled={!agreements[plan.id]}
                  >
                    Join
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 