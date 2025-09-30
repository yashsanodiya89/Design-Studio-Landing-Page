import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Linkedin,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";
import PortfolioItem from "@/components/PortfolioItem";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const services = [
    {
      title: "Brand Identity",
      description: "Crafting unique brand identities that resonate with your audience and stand out in the market.",
      icon: "🎨"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive user experiences that drive engagement and conversion for digital products.",
      icon: "📱"
    },
    {
      title: "Web Design",
      description: "Designing stunning, responsive websites that showcase your brand and convert visitors.",
      icon: "💻"
    },
    {
      title: "Print Design",
      description: "Eye-catching print materials that leave a lasting impression on your customers.",
      icon: "🖨️"
    }
  ];

  const portfolioItems = [
    { 
      id: 1, 
      title: "Corporate Branding", 
      category: "Branding",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 2, 
      title: "E-commerce Website", 
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 3, 
      title: "Mobile App UI", 
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 4, 
      title: "Marketing Campaign", 
      category: "Print",
      image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 5, 
      title: "Restaurant Branding", 
      category: "Branding",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    { 
      id: 6, 
      title: "Dashboard Design", 
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "The team transformed our brand identity completely. Our customer engagement increased by 40% after the redesign.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateX",
      content: "Exceptional attention to detail and creative approach. They delivered beyond our expectations.",
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "Professional, responsive, and incredibly talented. Our new website has doubled our conversion rate.",
      avatar: "ER"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">DesignStudio</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#services" className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Services</a>
                <a href="#portfolio" className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Portfolio</a>
                <a href="#about" className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium">About</a>
                <a href="#contact" className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Contact</a>
              </div>
            </nav>
            
            <div className="hidden md:block">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Get Started
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-900 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#services" className="text-gray-500 hover:text-indigo-600 block px-3 py-2 text-base font-medium">Services</a>
              <a href="#portfolio" className="text-gray-500 hover:text-indigo-600 block px-3 py-2 text-base font-medium">Portfolio</a>
              <a href="#about" className="text-gray-500 hover:text-indigo-600 block px-3 py-2 text-base font-medium">About</a>
              <a href="#contact" className="text-gray-500 hover:text-indigo-600 block px-3 py-2 text-base font-medium">Contact</a>
              <Button className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 md:py-28 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Creative Design Solutions <span className="text-indigo-600">That Convert</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              We craft beautiful, functional designs that help businesses stand out and achieve their goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-6">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of design services to help your business thrive in the digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our latest projects and see how we've helped businesses transform their visual identity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <PortfolioItem 
                key={item.id} 
                id={item.id} 
                title={item.title} 
                category={item.category} 
                image={item.image} 
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-8">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="font-bold text-indigo-600">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551836022-25b955e4090f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Design Studio Team" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Our Studio</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Founded in 2015, DesignStudio has been at the forefront of digital design innovation. 
                Our team of passionate designers, developers, and strategists work together to create 
                exceptional experiences that drive real business results.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                We believe great design is not just about aesthetics—it's about solving problems, 
                communicating messages, and creating meaningful connections between brands and their audiences.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-2" />
                  <span className="font-medium">150+ Projects Completed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-2" />
                  <span className="font-medium">98% Client Satisfaction</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-2" />
                  <span className="font-medium">15+ Industry Awards</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-2" />
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to start your next project? Contact us today for a free consultation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                      className="mt-1" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                      className="mt-1" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-700">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      required 
                      className="mt-1" 
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 py-6 text-lg">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div>
                <div className="bg-indigo-50 rounded-xl p-8 h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-3">
                        <Mail className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">Email</h4>
                        <p className="text-gray-600">hello@designstudio.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-3">
                        <Phone className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-3">
                        <MapPin className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">Office</h4>
                        <p className="text-gray-600">123 Design Street, Creative City, CC 10001</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Instagram className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Twitter className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">DesignStudio</h3>
              <p className="text-gray-400 mb-4">
                Creating beautiful, functional designs that help businesses thrive in the digital world.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Brand Identity</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">UI/UX Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Web Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Print Design</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Portfolio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for design tips and industry insights.
              </p>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-r-none bg-gray-800 border-gray-700 text-white"
                />
                <Button className="rounded-l-none bg-indigo-600 hover:bg-indigo-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DesignStudio. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <MadeWithDyad />
    </div>
  );
};

export default Index;