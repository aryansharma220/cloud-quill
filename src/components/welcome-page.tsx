"use client";

import { useState } from "react";
import Link from "next/link";
import { SignIn, SignUp } from "@clerk/nextjs";
import {
  Edit3,
  Share2,
  Shield,
  ArrowRight,
  Users,
  History,
  Lock,
  Layout,
  Gem,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Footer from "@/app/(home)/footer";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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
          description: "Full formatting controls with keyboard shortcuts",
        },
        {
          icon: Layout,
          title: "Templates",
          description: "Start quickly with pre-made templates",
        },
      ],
    },
    {
      id: "collaboration",
      title: "Team Collaboration",
      description: "Work together seamlessly",
      features: [
        {
          icon: Users,
          title: "Real-time Editing",
          description: "Multiple users can edit simultaneously",
        },
        {
          icon: Share2,
          title: "Easy Sharing",
          description: "Share documents with custom permissions",
        },
      ],
    },
    {
      id: "security",
      title: "Enterprise Security",
      description: "Keep your documents safe",
      features: [
        {
          icon: Lock,
          title: "End-to-end Encryption",
          description: "Your documents are always secure",
        },
        {
          icon: History,
          title: "Version Control",
          description: "Track changes and restore previous versions",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
        <div className="absolute left-60 right-0 top-40 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-sky-400 opacity-20 blur-[100px]" />
        <div className="absolute left-20 right-0 top-80 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]" />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between p-4 md:p-6 backdrop-blur-sm bg-white/70 sticky top-0 z-50 border-b"
      >
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Image src="/logo.svg" alt="Cloud Quill Logo - A modern document editor" width={40} height={40} />
            </motion.div>
            <h3 className="text-xl font-semibold text-[#735DA5] group-hover:text-[#8c76bd] transition-colors">
              Cloud Quill
            </h3>
          </Link>
        </div>


        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden sm:block"
          >
            <Button
              aria-label="Sign in to Cloud Quill"
              variant="outline"
              className="border-[#735DA5] text-[#735DA5] hover:bg-[#735DA5] hover:text-white transition-colors"
              onClick={() => setAuthMode("sign-in")}
            >
              Sign In
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              className="bg-[#735DA5] text-white hover:bg-[#8c76bd] transition-colors"
              onClick={() => setAuthMode("sign-up")}
            >
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 md:hidden"
            onClick={() => {/* Add mobile menu handler */}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#735DA5]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </motion.nav>

      <main className="flex-1" role="main">
        {/* Hero and Auth Section */}
        <section 
          className="py-16 sm:py-24 relative overflow-hidden"
          aria-label="Hero section"
          role="banner"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero Section */}
              <motion.div
                className="space-y-8"
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                <motion.h1
                  className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight"
                  variants={fadeInUp}
                >
                  Create, Collaborate,{" "}
                  <span className="text-[#735DA5]">Share</span>
                  <br />
                  Documents with Ease
                </motion.h1>

                <motion.p className="text-xl text-gray-600" variants={fadeInUp}>
                  Cloud Quill is your modern document editor for seamless
                  collaboration. Write, edit, and share your ideas in real-time.
                </motion.p>

                <motion.div className="space-y-6" variants={staggerContainer}>
                  {features.map((feature) => (
                    <motion.div
                      key={feature.title}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-colors"
                    >
                      <div className="mt-1 p-3 bg-[#735DA5] rounded-xl shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div className="pt-6" variants={fadeInUp}>
                  <Link href="/documents">
                    <Button className="group bg-[#735DA5] hover:bg-[#8c76bd] text-white px-8 py-6 rounded-xl text-lg">
                      Get Started
                      <motion.div
                        className="inline-block ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Auth Section */}
              <motion.div
                className="lg:pl-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-purple-100">
                  <div className="flex justify-center gap-4 mb-6">
                    <Button
                      variant={authMode === "sign-in" ? "default" : "outline"}
                      onClick={() => setAuthMode("sign-in")}
                      className={
                        authMode === "sign-in"
                          ? "bg-[#735DA5] hover:bg-[#8c76bd]"
                          : ""
                      }
                    >
                      Sign In
                    </Button>
                    <Button
                      variant={authMode === "sign-up" ? "default" : "outline"}
                      onClick={() => setAuthMode("sign-up")}
                      className={
                        authMode === "sign-up"
                          ? "bg-[#735DA5] hover:bg-[#8c76bd]"
                          : ""
                      }
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-gradient-to-b from-purple-50/50 to-white">
          <motion.div
            className="max-w-6xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <div className="inline-block p-3 bg-purple-100 rounded-xl mb-4">
                <Gem className="h-6 w-6 text-[#735DA5]" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Perfect for every team
              </h2>
              <p className="text-xl text-gray-600">
                Discover how Cloud Quill adapts to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Product Teams",
                  description:
                    "Collaborate on specs, roadmaps, and documentation",
                  icon: "👨‍💻",
                  color: "bg-blue-50",
                },
                {
                  title: "Marketing Teams",
                  description: "Create content strategies and campaign briefs",
                  icon: "📈",
                  color: "bg-green-50",
                },
                {
                  title: "HR Teams",
                  description: "Manage policies and employee documentation",
                  icon: "👥",
                  color: "bg-purple-50",
                },
              ].map((useCase) => (
                <motion.div
                  key={useCase.title}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-2xl ${useCase.color} backdrop-blur-sm`}
                >
                  <span className="text-4xl mb-4 block">{useCase.icon}</span>
                  <h3 className="text-xl font-semibold mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Features Showcase */}
        <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-white">
          <motion.div
            className="max-w-6xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Powerful features for modern teams
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to create, edit, and share documents
              </p>
            </div>

            <Tabs defaultValue="editing" className="w-full" aria-label="Feature categories">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/50 p-2 rounded-xl">
                {showcaseFeatures.map((feature) => (
                  <TabsTrigger
                    key={feature.id}
                    value={feature.id}
                    className="data-[state=active]:bg-[#735DA5] data-[state=active]:text-white"
                  >
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
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          key={item.title}
                        >
                          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                              <div className="p-3 bg-[#735DA5] rounded-xl shadow-md">
                                <Icon className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-lg mb-2">
                                  {item.title}
                                </h3>
                                <p className="text-gray-600">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <motion.div
            className="max-w-4xl mx-auto px-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 p-12 rounded-3xl bg-gradient-to-r from-[#735DA5] to-[#8c76bd] shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to transform your document workflow?
              </h2>
              <p className="text-lg text-purple-100 mb-8">
                Login to join us switch to Cloud Quill.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              ></motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
