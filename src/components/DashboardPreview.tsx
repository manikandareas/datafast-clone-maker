import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const StatCard = ({ 
  label, 
  value, 
  icon,
  highlight = false 
}: { 
  label: string; 
  value: string; 
  icon: React.ReactNode;
  highlight?: boolean;
}) => (
  <Card className={`p-3 md:p-4 ${highlight ? 'border-primary bg-primary/5' : 'bg-card/50'}`}>
    <div className="flex items-center gap-2 md:gap-3">
      <div className={`p-1.5 md:p-2 rounded-lg ${highlight ? 'bg-primary/10' : 'bg-muted'}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs md:text-sm text-muted-foreground truncate">{label}</div>
        <div className="text-lg md:text-2xl font-bold text-foreground">{value}</div>
      </div>
    </div>
  </Card>
);

const ParticipantCard = ({
  name,
  status,
  progress,
  score,
  lastActivity
}: {
  name: string;
  status: 'In Progress' | 'Completed' | 'Timeout';
  progress: string;
  score: string;
  lastActivity: string;
}) => {
  const statusColors = {
    'In Progress': 'bg-blue-500',
    'Completed': 'bg-green-500',
    'Timeout': 'bg-orange-500'
  };

  return (
    <Card className="p-4 hover:border-primary/50 transition-all">
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
              {name[0]}
            </div>
            <div>
              <div className="font-medium text-foreground">{name}</div>
              <div className="text-xs text-muted-foreground">{lastActivity}</div>
            </div>
          </div>
          <Badge className={`${statusColors[status]} text-white border-0`}>
            {status}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{progress}</span>
            <span className="font-semibold text-foreground">{score}</span>
          </div>
          <Progress value={parseInt(score)} className="h-2" />
        </div>
      </div>
    </Card>
  );
};

export const DashboardPreview = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-4">
            Lihat Bagaimana Ngerti.in Bekerja
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Monitoring aktivitas siswa secara real-time. Lihat siapa yang sedang mengerjakan, 
            siapa yang kesulitan, dan bagaimana performa keseluruhan—semuanya dalam satu dashboard.
          </p>
        </div>

        <div className="relative">
          <Card className="p-4 md:p-6 shadow-2xl border-border bg-card">
            {/* Real-time Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
              <StatCard 
                label="Total Participants" 
                value="24"
                icon={<Users className="h-5 w-5 text-primary" />}
              />
              <StatCard 
                label="Active Now" 
                value="18"
                icon={<div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <Clock className="h-5 w-5 text-green-500" />
                </div>}
                highlight={true}
              />
              <StatCard 
                label="Average Score" 
                value="78.5%"
                icon={<TrendingUp className="h-5 w-5 text-accent" />}
              />
              <StatCard 
                label="Completion Rate" 
                value="45%"
                icon={<CheckCircle className="h-5 w-5 text-blue-500" />}
              />
            </div>

            {/* Live Participant Cards */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                Live Participants
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ParticipantCard
                  name="Ahmad Pratama"
                  status="In Progress"
                  progress="15/20 soal"
                  score="75%"
                  lastActivity="just now"
                />
                <ParticipantCard
                  name="Siti Nurhaliza"
                  status="Completed"
                  progress="20/20 soal"
                  score="95%"
                  lastActivity="2m ago"
                />
                <ParticipantCard
                  name="Budi Santoso"
                  status="In Progress"
                  progress="8/20 soal"
                  score="40%"
                  lastActivity="just now"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-6 border-t border-border">
              <button className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 mx-auto">
                Coba Dashboard Sendiri →
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};