'use client';

import { motion } from 'framer-motion';
import { Canvas, useFrame } from "@react-three/fiber"
import { useEffect, useRef } from 'react';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

function AIGridBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <OrbitControls enableZoom={false} />
      <Sphere args={[1, 32, 32]} material={new THREE.MeshBasicMaterial({
        wireframe: true,
        color: 0x4F46E5
      })} />
    </Canvas>
  );
}

export function Hero() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-50">
        <AIGridBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Revolutionize Your B2B Prospecting with LeadGenius AI
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Automate Lead Generation, Validate Contacts, and Create Hyper-Personalized Outreach Campaigns
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              ref={buttonRef}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
            >
              Join the Waitlist
            </button>
          </motion.div>

          <motion.p
            className="mt-6 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Empower Your Sales Team with AI-Driven Efficiency
          </motion.p>
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
