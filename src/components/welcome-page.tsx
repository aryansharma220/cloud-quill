"use client";

import { useState } from "react";
import Link from "next/link";
import { SignIn, SignUp } from "@clerk/nextjs";
import { 
  Edit3, Share2, Shield, ArrowRight,
  Users, History, Lock, Layout
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Footer from "@/app/(home)/footer";

export default function WelcomePage() {
  const [authMode, setAuthMode] = useState<"sign-in" | "sign-up">("sign-in");

  const features = [
    {
      icon: Edit3,
      title: "Intuitive Editing",
      description: "Rich text editor with real-time formatting",
    },
    {
      icon: Share2,
      title: "Easy Collaboration",
      description: "Work together in real-time with your team",
    },
    {
      icon: Shield,
      title: "Secure Storage",
      description: "Your documents are encrypted and safely stored",
    },
  ];

 
  const showcaseFeatures = [
    {
      id: "editing",
      title: "Advanced Editing",
      description: "Powerful text editing capabilities",
      features: [
        {
          icon: Edit3,
          title: "Rich Text Formatting",
          description: "Full formatting controls with keyboard shortcuts"
        },
        {
          icon: Layout,
          title: "Templates",
          description: "Start quickly with pre-made templates"
        }
      ]
    },
    {
      id: "collaboration",
      title: "Team Collaboration",
      description: "Work together seamlessly",
      features: [
        {
          icon: Users,
          title: "Real-time Editing",
          description: "Multiple users can edit simultaneously"
        },
        {
          icon: Share2,
          title: "Easy Sharing",
          description: "Share documents with custom permissions"
        }
      ]
    },
    {
      id: "security",
      title: "Enterprise Security",
      description: "Keep your documents safe",
      features: [
        {
          icon: Lock,
          title: "End-to-end Encryption",
          description: "Your documents are always secure"
        },
        {
          icon: History,
          title: "Version Control",
          description: "Track changes and restore previous versions"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-[#735DA5]">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <h3 className="text-xl font-semibold text-[#D3C5E5]">Cloud Quill</h3>
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero and Auth Section */}
        <section className="py-12 sm:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero Section */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
                  Create, Collaborate, and Share Documents with Ease
                </h1>
                <p className="text-lg text-muted-foreground">
                  Cloud Quill is your modern document editor for seamless collaboration.
                  Write, edit, and share your ideas in real-time.
                </p>
                
                <div className="space-y-4">
                  {features.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-[#735DA5] rounded-lg">
                        <feature.icon className="h-5 w-5 text-[#D3C5E5]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Link 
                    href="/documents" 
                    className="inline-flex items-center gap-2 bg-[#735DA5] text-white px-6 py-3 rounded-lg hover:bg-[#D3C5E5] transition-colors"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Auth Section */}
              <div className="lg:pl-10">
                <div className="bg-white p-8 rounded-xl shadow-xl">
                  <div className="flex justify-center gap-4 mb-6">
                    <Button
                      variant={authMode === "sign-in" ? "default" : "outline"}
                      onClick={() => setAuthMode("sign-in")}
                    >
                      Sign In
                    </Button>
                    <Button
                      variant={authMode === "sign-up" ? "default" : "outline"}
                      onClick={() => setAuthMode("sign-up")}
                    >
                      Sign Up
                    </Button>
                  </div>
                  
                  {authMode === "sign-in" ? (
                    <SignIn routing="hash" />
                  ) : (
                    <SignUp routing="hash" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Showcase */}
        <section className="py-16 bg-gradient-to-b from-white to-[#f7f4fc]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Powerful features for modern teams</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to create, edit, and share documents
              </p>
            </div>

            <Tabs defaultValue="editing" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                {showcaseFeatures.map((feature) => (
                  <TabsTrigger key={feature.id} value={feature.id}>
                    {feature.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {showcaseFeatures.map((feature) => (
                <TabsContent key={feature.id} value={feature.id}>
                  <div className="grid md:grid-cols-2 gap-8">
                    {feature.features.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Card key={item.title} className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-[#735DA5] rounded-lg">
                              <Icon className="h-6 w-6 text-[#D3C5E5]" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">{item.title}</h3>
                              <p className="text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}