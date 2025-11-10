import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Globe } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart } from "recharts";

const data = [
  { date: "Jan 1", visitors: 1200, revenue: 890 },
  { date: "Jan 5", visitors: 1400, revenue: 1100 },
  { date: "Jan 10", visitors: 1800, revenue: 1450 },
  { date: "Jan 15", visitors: 1600, revenue: 1300 },
  { date: "Jan 20", visitors: 2200, revenue: 1750 },
  { date: "Jan 25", visitors: 3100, revenue: 2400 },
  { date: "Jan 30", visitors: 2000, revenue: 1650 },
];

const StatCard = ({ 
  label, 
  value, 
  change, 
  isPositive, 
  icon 
}: { 
  label: string; 
  value: string; 
  change: string; 
  isPositive: boolean;
  icon?: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      {icon}
      <span>{label}</span>
    </div>
    <div className="text-2xl font-bold text-foreground">{value}</div>
    <div className={`flex items-center gap-1 text-xs ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
      {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
      <span>{change}</span>
    </div>
  </div>
);

export const DashboardPreview = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="relative">
          <div className="absolute -top-6 right-8 text-sm text-muted-foreground italic flex items-center gap-2">
            <span>Interactive demo</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
              <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <Card className="p-6 shadow-2xl border-border bg-card overflow-hidden">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 flex items-center justify-center gap-2 text-sm text-muted-foreground bg-secondary rounded px-3 py-1.5 mx-8">
                <span>https://datafa.st/</span>
                <span className="font-semibold text-foreground">codefa.st</span>
              </div>
            </div>

            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold">
                  cf
                </div>
                <span className="font-semibold text-foreground">codefa.st</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <button className="px-3 py-1.5 text-muted-foreground hover:text-foreground">
                  Last 30 days
                </button>
                <button className="px-3 py-1.5 text-foreground font-medium border-b-2 border-primary">
                  Daily
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
              <StatCard 
                label="Visitors" 
                value="20k" 
                change="-9.9%" 
                isPositive={false}
                icon={<div className="h-3 w-3 rounded-full bg-blue-500" />}
              />
              <StatCard 
                label="Revenue" 
                value="$20k" 
                change="+17.7%" 
                isPositive={true}
                icon={<div className="h-3 w-3 rounded-full bg-primary" />}
              />
              <StatCard 
                label="Conversion rate" 
                value="0.42%" 
                change="+39.2%" 
                isPositive={true}
              />
              <StatCard 
                label="Revenue/visitor" 
                value="$1.00" 
                change="+30.7%" 
                isPositive={true}
              />
              <StatCard 
                label="Bounce rate" 
                value="83%" 
                change="+0.4%" 
                isPositive={false}
              />
              <StatCard 
                label="Session time" 
                value="2m 42s" 
                change="+6.0%" 
                isPositive={true}
              />
            </div>

            {/* Chart */}
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    tickLine={{ stroke: 'hsl(var(--border))' }}
                  />
                  <YAxis 
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    tickLine={{ stroke: 'hsl(var(--border))' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Line 
                    type="monotone" 
                    dataKey="visitors" 
                    stroke="hsl(var(--chart-1))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--chart-1))', strokeWidth: 2, r: 4 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
