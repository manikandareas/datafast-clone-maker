import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/signin-hero.png";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Sign In Form */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md bg-card/50 backdrop-blur-sm border-border/50 p-8 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-accent rounded-sm"></div>
                <div className="w-1 h-6 bg-primary rounded-sm"></div>
                <div className="w-1 h-3 bg-accent/60 rounded-sm"></div>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">
                Welcome to DataFast
              </h1>
              <p className="text-sm text-muted-foreground">
                Create a free account to discover your business's best marketing channels.
              </p>
            </div>

            {/* Google Sign In Button */}
            <Button
              variant="secondary"
              className="w-full bg-muted hover:bg-muted/80 text-foreground"
              size="lg"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign up with Google
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">or</span>
              </div>
            </div>

            {/* Email Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="zuck@meta.com"
                  className="bg-muted/50 border-border/50"
                />
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                Sign up with email
              </Button>
            </div>

            {/* Footer */}
            <div className="space-y-2 text-center">
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our Terms of Service.
              </p>
              <Link to="/" className="text-xs text-muted-foreground hover:text-foreground underline">
                Need help?
              </Link>
            </div>
          </Card>
        </div>

        {/* Right Side - Hero Image (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full h-full min-h-[600px] rounded-2xl overflow-hidden">
            <img 
              src={heroImage} 
              alt="DataFast Analytics Dashboard" 
              className="w-full h-full object-cover object-center"
            />
            {/* Optional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
