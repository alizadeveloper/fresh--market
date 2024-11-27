"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold">Contact Us</h1>

      <div className="grid gap-12 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="mb-6 text-2xl font-semibold">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>

        <div>
          <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-medium">Address</h3>
              <p className="text-muted-foreground">
                123 Market Street
                <br />
                City, State 12345
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium">Phone</h3>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium">Email</h3>
              <p className="text-muted-foreground">support@freshmarket.com</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}