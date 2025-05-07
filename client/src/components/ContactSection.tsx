import { useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { 
  RectangleEllipsis, 
  MapPin, 
  Link as LinkIcon, 
  Linkedin, 
  Github, 
  Twitter, 
  Youtube,
  Instagram 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await apiRequest('POST', '/api/contact', formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-6 max-w-6xl section-fade ${isVisible ? 'visible' : ''}`}
      >
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-secondary mb-6">
              I'm based in Coimbatore and open to collaborations, research discussions, or solving exciting problems with data.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <RectangleEllipsis className="text-accent h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:srikanthmurali3@gmail.com" className="text-accent hover:underline">srikanthmurali3@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <MapPin className="text-accent h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p>Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <LinkIcon className="text-accent h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/srikanthmurali3" target="_blank" className="text-accent hover:underline">linkedin.com/in/srikanthmurali3</a>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/srikanthmurali3" target="_blank" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Linkedin className="text-accent h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Github className="text-accent h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Twitter className="text-accent h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Youtube className="text-accent h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Instagram className="text-accent h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <form className="bg-white p-8 rounded-xl shadow-lg" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <div className="mb-4">
                <Label htmlFor="name" className="text-sm font-medium text-secondary mb-1">Your Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" 
                  placeholder="Enter your name" 
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="email" className="text-sm font-medium text-secondary mb-1">Your Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" 
                  placeholder="Enter your email" 
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="subject" className="text-sm font-medium text-secondary mb-1">Subject</Label>
                <Input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" 
                  placeholder="Enter subject" 
                />
              </div>
              <div className="mb-6">
                <Label htmlFor="message" className="text-sm font-medium text-secondary mb-1">Your Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" 
                  placeholder="Enter your message" 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-accent text-white py-3 rounded-lg hover:bg-accent/90 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
