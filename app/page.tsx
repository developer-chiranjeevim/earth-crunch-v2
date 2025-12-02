"use client"

import { ArrowRight, Star, Users, Award, Truck, Shield, Leaf, Clock, ChevronRight, Calendar, User as UserIcon, Heart, MessageCircle } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { ImageWithFallback } from './components/figma/ImageWithFallback';


export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Traditional Murukku",
      price: 299,
      originalPrice: 349,
      image: "https://images.unsplash.com/photo-1680359939304-7e27ee183e7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHNuYWNrcyUyMG11cnVra3V8ZW58MXx8fHwxNzU4NzM3NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      reviews: 127,
      featured: true
    },
    {
      id: 2,
      name: "Heritage Mixture",
      price: 199,
      originalPrice: 229,
      image: "https://images.unsplash.com/photo-1616813769023-d0557572ddbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMG5hbWtlZW4lMjBzbmFja3N8ZW58MXx8fHwxNzU4ODExMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.6,
      reviews: 89,
      featured: false
    },
    {
      id: 3,
      name: "Traditional Sweets Box",
      price: 599,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1723937188995-beac88d36998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0cmFkaXRpb25hbCUyMHN3ZWV0cyUyMHZhcmlldHl8ZW58MXx8fHwxNzU4ODExMTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      reviews: 156,
      featured: true
    },
    {
      id: 4,
      name: "Spice Collection",
      price: 449,
      originalPrice: 499,
      image: "https://images.unsplash.com/photo-1663325265966-0d17de3e85c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzcGljZXMlMjBtYXJrZXRwbGFjZXxlbnwxfHx8fDE3NTg4MTExMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      reviews: 78,
      featured: false
    }
  ];

  const categories = [
    {
      name: "Traditional Snacks",
      count: "25+ items",
      image: "https://images.unsplash.com/photo-1680359939304-7e27ee183e7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHNuYWNrcyUyMG11cnVra3V8ZW58MXx8fHwxNzU4NzM3NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Festive Sweets",
      count: "18+ items", 
      image: "https://images.unsplash.com/photo-1723937188995-beac88d36998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0cmFkaXRpb25hbCUyMHN3ZWV0cyUyMHZhcmlldHl8ZW58MXx8fHwxNzU4ODExMTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Spice Blends",
      count: "12+ items",
      image: "https://images.unsplash.com/photo-1663325265966-0d17de3e85c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzcGljZXMlMjBtYXJrZXRwbGFjZXxlbnwxfHx8fDE3NTg4MTExMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Namkeen Variety",
      count: "20+ items",
      image: "https://images.unsplash.com/photo-1616813769023-d0557572ddbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMG5hbWtlZW4lMjBzbmFja3N8ZW58MXx8fHwxNzU4ODExMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      comment: "The murukku tastes exactly like my grandmother's recipe! Absolutely authentic and fresh. I order every month now.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "Rajesh Kumar",
      location: "Bangalore",
      rating: 5,
      comment: "Best quality traditional snacks I've found online. The packaging is excellent and delivery is always on time.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Anitha Rajan",
      location: "Chennai",
      rating: 5,
      comment: "Heritage Snacks reminds me of home. The authentic taste and quality are unmatched. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Making Perfect Murukku: A Traditional Recipe Guide",
      excerpt: "Discover the secrets behind creating crispy, golden murukku with our step-by-step traditional recipe passed down through generations.",
      image: "https://images.unsplash.com/photo-1596040033229-a0b44d860b6b?w=800&h=600&fit=crop",
      category: "Recipes",
      date: "Nov 20, 2025",
      author: "Chef Lakshmi",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Health Benefits of Traditional Indian Snacks You Should Know",
      excerpt: "Learn about the nutritional value and health benefits of traditional snacks made with natural ingredients and ancient techniques.",
      image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=800&h=600&fit=crop",
      category: "Health",
      date: "Nov 18, 2025",
      author: "Dr. Meera Patel",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Festive Snacking: Best Traditional Treats for Diwali 2025",
      excerpt: "Explore our curated selection of traditional sweets and snacks perfect for your Diwali celebrations this year.",
      image: "https://images.unsplash.com/photo-1606115915090-be18fea23ec7?w=800&h=600&fit=crop",
      category: "Festivals",
      date: "Nov 15, 2025",
      author: "Kavya Menon",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "From Our Kitchen: The Story Behind Heritage Snacks Since 1952",
      excerpt: "Take a journey through 70 years of culinary heritage and discover how we've preserved authentic flavors across generations.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop",
      category: "Story",
      date: "Nov 12, 2025",
      author: "Ramesh Iyer",
      readTime: "6 min read"
    }
  ];

  const faqs = [
    {
      question: "What makes your snacks authentic and traditional?",
      answer: "We use recipes that have been passed down through generations since 1952. All our snacks are made with traditional methods, premium ingredients, and without any artificial preservatives or colors."
    },
    {
      question: "How fresh are the products when delivered?",
      answer: "All our products are made fresh to order and delivered within 2-3 days. We use premium packaging to ensure they reach you in perfect condition with maximum freshness."
    },
    {
      question: "Do you ship across India?",
      answer: "Yes, we ship to all major cities across India. Standard delivery takes 3-5 business days, and express delivery is available for metro cities with 1-2 day delivery."
    },
    {
      question: "Are your products suitable for people with dietary restrictions?",
      answer: "We offer various options including gluten-free, vegan, and sugar-free variants. Each product page clearly lists all ingredients and allergen information."
    },
    {
      question: "What is your return and refund policy?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with your purchase, contact us within 7 days of delivery for a full refund or replacement."
    },
    {
      question: "Can I order in bulk for events or corporate gifting?",
      answer: "Yes! We offer special bulk pricing and custom packaging for corporate orders, weddings, and events. Contact our customer service for personalized quotes."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50" itemScope itemType="https://schema.org/Organization">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl text-[#03120e] leading-tight" style={{ fontFamily: 'Georgia, serif' }} itemProp="name">
                  Authentic Indian Flavors, 
                  <span className="text-[#26413c]"> Delivered Fresh</span>
                </h1>
                <p className="text-xl text-[#3e505b] leading-relaxed" itemProp="description">
                  Experience the rich heritage of traditional South Indian snacks, crafted with 
                  love using time-honored recipes passed down through generations.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-[#26413c] hover:bg-[#1a1d1a] text-white px-8 py-6 text-lg group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#26413c] text-[#26413c] hover:bg-gray-50 px-8 py-6 text-lg"
                >
                  Our Story
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#8ab0ab] fill-[#8ab0ab]" />
                  <span className="text-[#3e505b]">4.8/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#26413c]" />
                  <span className="text-[#3e505b]">10,000+ Happy Customers</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1680359939304-7e27ee183e7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMHNuYWNrcyUyMG11cnVra3V8ZW58MXx8fHwxNzU4NzM3NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Traditional Indian Snacks"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-2 border-gray-200">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#26413c]" />
                  <div>
                    <p className="text-sm text-[#3e505b]">Award Winning</p>
                    <p className="text-[#03120e]">Best Traditional Snacks 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-[#26413c]" />
              </div>
              <h3 className="text-[#03120e] mb-1">100% Authentic</h3>
              <p className="text-sm text-[#3e505b]">Traditional recipes</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                <Leaf className="w-6 h-6 text-[#26413c]" />
              </div>
              <h3 className="text-[#03120e] mb-1">Natural Ingredients</h3>
              <p className="text-sm text-[#3e505b]">No preservatives</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                <Truck className="w-6 h-6 text-[#26413c]" />
              </div>
              <h3 className="text-[#03120e] mb-1">Fast Delivery</h3>
              <p className="text-sm text-[#3e505b]">2-3 days nationwide</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-[#26413c]" />
              </div>
              <h3 className="text-[#03120e] mb-1">Fresh Daily</h3>
              <p className="text-sm text-[#3e505b]">Made to order</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white" itemScope itemType="https://schema.org/ItemList">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[#03120e] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Shop by Category
            </h2>
            <p className="text-xl text-[#3e505b]">
              Explore our wide range of traditional Indian snacks and sweets
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={index}
                className="group cursor-pointer border-gray-200 hover:border-[#26413c] transition-all hover:shadow-xl overflow-hidden"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    itemProp="image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl mb-1" itemProp="name">{category.name}</h3>
                    <p className="text-white/90 text-sm">{category.count}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl text-[#03120e] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Bestselling Products
              </h2>
              <p className="text-xl text-[#3e505b]">
                Customer favorites that keep selling out
              </p>
            </div>
            <Button 
              variant="outline"
              className="border-[#26413c] text-[#26413c] hover:bg-gray-100 hidden md:flex items-center gap-2"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card 
                key={product.id}
                className="group cursor-pointer border-gray-200 hover:border-[#26413c] transition-all hover:shadow-xl overflow-hidden bg-white"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="relative h-56 overflow-hidden">
                  {product.featured && (
                    <Badge className="absolute top-3 left-3 bg-[#26413c] text-white z-10">
                      Bestseller
                    </Badge>
                  )}
                  <ImageWithFallback 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    itemProp="image"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg text-[#03120e] mb-2 group-hover:text-[#26413c] transition-colors" itemProp="name">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#8ab0ab] fill-[#8ab0ab]" />
                      <span className="text-sm text-[#3e505b]" itemProp="ratingValue">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <span className="text-xl text-[#03120e]" itemProp="price">SGD {product.price}</span>
                    <span className="text-sm text-gray-500 line-through">SGD {product.originalPrice}</span>
                    <meta itemProp="priceCurrency" content="INR" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button 
              variant="outline"
              className="border-[#26413c] text-[#26413c] hover:bg-gray-100"
            >
              View All Products
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About/Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="bg-white text-[#26413c] border-gray-200 mb-4">
                Our Heritage
              </Badge>
              <h2 className="text-3xl lg:text-4xl text-[#03120e] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                70 Years of Culinary Excellence
              </h2>
              <div className="space-y-4 text-[#3e505b] leading-relaxed">
                <p>
                  Since 1952, Heritage Snacks has been the trusted name for authentic South Indian traditional snacks. 
                  What started as a small family kitchen in Chennai has grown into a beloved brand serving thousands 
                  of customers across India.
                </p>
                <p>
                  We remain committed to our founding principles: using only the finest natural ingredients, 
                  following time-tested traditional methods, and never compromising on quality. Every batch is 
                  made with the same care and attention our founders put into their very first recipe.
                </p>
                <p>
                  Our snacks carry the warmth of home-cooked food and the authentic flavors that transport you 
                  back to your grandmother's kitchen. This is our promise to you – genuine taste, genuine quality.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl text-[#26413c]">70+</p>
                  <p className="text-sm text-[#3e505b]">Years Legacy</p>
                </div>
                <div>
                  <p className="text-3xl text-[#26413c]">50+</p>
                  <p className="text-sm text-[#3e505b]">Authentic Recipes</p>
                </div>
                <div>
                  <p className="text-3xl text-[#26413c]">100%</p>
                  <p className="text-sm text-[#3e505b]">Natural</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop"
                  alt="Heritage Kitchen"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[#03120e] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              What Our Customers Say
            </h2>
            <p className="text-xl text-[#3e505b]">
              Join thousands of happy customers who love our authentic snacks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow bg-white" itemScope itemType="https://schema.org/Review">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <ImageWithFallback 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[#03120e]" itemProp="author">{testimonial.name}</p>
                      <p className="text-sm text-[#3e505b]">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#8ab0ab] fill-[#8ab0ab]" />
                    ))}
                  </div>
                  <p className="text-[#3e505b] italic" itemProp="reviewBody">
                    "{testimonial.comment}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 text-[#3e505b]">
              <Star className="w-5 h-5 text-[#8ab0ab] fill-[#8ab0ab]" />
              <span className="text-lg">Rated 4.8/5 from 500+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white" id="blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl text-[#03120e] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                From Our Kitchen Blog
              </h2>
              <p className="text-xl text-[#3e505b]">
                Recipes, stories, and insights from our culinary journey
              </p>
            </div>
            <Button 
              variant="outline"
              className="border-[#26413c] text-[#26413c] hover:bg-gray-100 hidden md:flex items-center gap-2"
            >
              View All Posts
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <Card 
                key={post.id}
                className="group cursor-pointer border-gray-200 hover:border-[#26413c] transition-all hover:shadow-xl overflow-hidden bg-white"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    itemProp="image"
                  />
                  <Badge className="absolute top-3 left-3 bg-[#26413c] text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4 text-xs text-[#3e505b] mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span itemProp="datePublished">{post.date}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg text-[#03120e] mb-2 group-hover:text-[#26413c] transition-colors line-clamp-2" itemProp="headline">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#3e505b] line-clamp-2 mb-3" itemProp="description">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#3e505b]">
                    <UserIcon className="w-4 h-4" />
                    <span itemProp="author">{post.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button 
              variant="outline"
              className="border-[#26413c] text-[#26413c] hover:bg-gray-100"
            >
              View All Blog Posts
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[#03120e] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#3e505b]">
              Everything you need to know about our products and services
            </p>
          </div>

          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-gray-200 bg-white" itemScope itemType="https://schema.org/Question">
                <CardContent className="p-6">
                  <h3 className="text-lg text-[#03120e] mb-2" itemProp="name">
                    {faq.question}
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-[#3e505b]" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-[#3e505b] mb-4">
              Still have questions? We're here to help!
            </p>
            <Button className="bg-[#26413c] hover:bg-[#1a1d1a] text-white">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-gray-200 bg-gray-50 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gray-200">
                  <Heart className="w-8 h-8 text-[#26413c]" />
                </div>
                <h2 className="text-3xl text-[#03120e] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Join Our Food Lovers Community
                </h2>
                <p className="text-lg text-[#3e505b] mb-8">
                  Subscribe to get exclusive recipes, special offers, and updates about new traditional snacks. 
                  Plus, get 10% off your first order!
                </p>
                <div className="max-w-md mx-auto">
                  <div className="flex gap-2">
                    <Input 
                      type="email"
                      placeholder="Enter your email address"
                      className="border-gray-300 bg-white focus:border-[#26413c]"
                    />
                    <Button className="bg-[#26413c] hover:bg-[#1a1d1a] text-white px-6">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-[#3e505b] mt-3">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#26413c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Ready to Experience Authentic Flavors?
          </h2>
          <p className="text-xl text-[#8ab0ab] mb-8 max-w-2xl mx-auto">
            Start your journey with Heritage Snacks today and taste the difference that 70 years of tradition makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-[#26413c] hover:bg-gray-100 px-8 py-6 text-lg"
            >
              Browse All Products
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}