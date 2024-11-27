export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <p className="text-sm text-muted-foreground">
              FreshMarket is your premier destination for fresh, organic produce and artisanal goods.
              We believe in quality, sustainability, and supporting local farmers.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/products" className="hover:text-primary">
                  Products
                </a>
              </li>
              <li>
                <a href="/categories" className="hover:text-primary">
                  Categories
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/shipping" className="hover:text-primary">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-primary">
                  Returns Policy
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-primary">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: support@freshmarket.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Market Street</li>
              <li>City, State 12345</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FreshMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}