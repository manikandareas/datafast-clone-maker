import { Search, Copy, Download, QrCode, Settings, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const scoreData = [
  { range: "0-20", count: 2 },
  { range: "21-40", count: 0 },
  { range: "41-60", count: 0 },
  { range: "61-80", count: 0 },
  { range: "81-100", count: 0 },
];

const participants = [
  {
    id: 1,
    name: "Vito Andareas Manik",
    avatar: "/placeholder.svg",
    attempt: 1,
    questions: 20,
    total: 20,
    score: 10,
    correct: 2,
    totalQuestions: 20,
    lastActive: "3d ago",
    status: "Completed",
    progress: 100,
  },
  {
    id: 2,
    name: "Vito Andareas Manik",
    avatar: "/placeholder.svg",
    attempt: 2,
    questions: 4,
    total: 20,
    score: 0,
    correct: 0,
    totalQuestions: 4,
    lastActive: "3d ago",
    status: "Completed",
    progress: 20,
  },
];

export default function Monitoring() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                DS
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Ngert.in</span>
                <span>/</span>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Teacher</span>
                </div>
                <span>/</span>
                <Badge variant="secondary" className="font-normal">
                  Workspace
                </Badge>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-accent/10 text-accent-foreground font-medium">
                <span className="mr-1">💎</span> 28
              </Badge>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>VM</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Vito Andareas Manik</span>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Title Section */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">UTS Diferensial Kelas B</h1>
            <p className="text-sm text-muted-foreground">
              Sesi sudah berakhir pada 11 Nov 2025 pukul 16:29
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Pengaturan
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-xl">👥</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Participants</p>
                <p className="text-3xl font-bold">2</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  Active now <div className="h-2 w-2 rounded-full bg-emerald-500" />
                </p>
                <p className="text-3xl font-bold">0</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div>
                <p className="text-sm text-muted-foreground">Average Score</p>
                <p className="text-3xl font-bold">5.0</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
                <p className="text-3xl font-bold">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Score Distribution */}
          <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Distribusi Skor</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Distribusi nilai peserta dalam sesi ini
            </p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={scoreData}>
                  <XAxis
                    dataKey="range"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    axisLine={{ stroke: "hsl(var(--border))" }}
                  />
                  <YAxis
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    axisLine={{ stroke: "hsl(var(--border))" }}
                  />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Share Test */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Bagikan Test</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Kode akses untuk peserta
            </p>
            <div className="flex flex-col items-center mb-6">
              <div className="bg-background p-4 rounded-lg border-2 border-border mb-4">
                <QrCode className="h-32 w-32 text-foreground" />
              </div>
              <p className="text-xs text-muted-foreground mb-1">Kode Akses</p>
              <p className="text-2xl font-bold tracking-wider">MHF6RF</p>
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" size="sm">
                  <QrCode className="h-4 w-4 mr-2" />
                  Salin QR
                </Button>
              </div>
              <div className="relative">
                <Input
                  value="https://app.ngert.in/join/MHF6RF"
                  readOnly
                  className="pr-10 bg-background"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1 h-7 w-7"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Salin Link Lengkap
              </Button>
            </div>
          </div>
        </div>

        {/* Monitoring Section - Completely Redesigned */}
        <div className="space-y-6">
          {/* Header with Tabs */}
          <div className="bg-gradient-to-br from-primary/5 via-card to-accent/5 border border-primary/20 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div className="absolute -top-1 -right-1 h-4 w-4 bg-emerald-500 rounded-full border-2 border-background animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Live Monitoring Dashboard
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Real-time updates • Auto-refresh setiap 5 detik
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:border-primary/30">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:border-primary/30">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div className="group relative overflow-hidden bg-gradient-to-br from-background to-background/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Total Participants</p>
                  <p className="text-3xl font-bold text-foreground mb-1">2</p>
                  <p className="text-xs text-primary font-medium">+100% from last session</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-gradient-to-br from-background to-background/50 border border-border rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Active Now</p>
                  <p className="text-3xl font-bold text-foreground mb-1">0</p>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">All completed</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-gradient-to-br from-background to-background/50 border border-border rounded-xl p-4 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Avg Score</p>
                  <p className="text-3xl font-bold text-foreground mb-1">5.0</p>
                  <p className="text-xs text-muted-foreground font-medium">Out of 100</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-gradient-to-br from-background to-background/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Completion</p>
                  <p className="text-3xl font-bold text-foreground mb-1">100%</p>
                  <p className="text-xs text-primary font-medium">🎉 Perfect!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filters Bar */}
          <div className="bg-card border border-border rounded-2xl p-4 shadow-lg">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1 group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  placeholder="Search by name, email, or status..."
                  className="pl-12 h-12 bg-background border-2 border-border hover:border-primary/50 focus:border-primary transition-all rounded-xl text-base"
                />
              </div>
              <Select defaultValue="score">
                <SelectTrigger className="w-full md:w-52 h-12 bg-background border-2 hover:border-primary/50 transition-colors rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="score">📊 Sort by Score</SelectItem>
                  <SelectItem value="name">👤 Sort by Name</SelectItem>
                  <SelectItem value="time">⏰ Sort by Time</SelectItem>
                  <SelectItem value="progress">📈 Sort by Progress</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-52 h-12 bg-background border-2 hover:border-primary/50 transition-colors rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">✨ All Status</SelectItem>
                  <SelectItem value="completed">✅ Completed</SelectItem>
                  <SelectItem value="in-progress">⏳ In Progress</SelectItem>
                  <SelectItem value="not-started">⚪ Not Started</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Participant Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {participants.map((participant, index) => (
              <div
                key={participant.id}
                className="group relative bg-gradient-to-br from-card via-card to-primary/5 border-2 border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Top Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg px-3 py-1 font-semibold">
                    ✓ {participant.status}
                  </Badge>
                </div>

                {/* Content */}
                <div className="relative space-y-5">
                  {/* Header */}
                  <div className="flex items-start gap-4 pr-24">
                    <div className="relative flex-shrink-0">
                      <div className="relative">
                        <Avatar className="h-16 w-16 ring-4 ring-background group-hover:ring-primary/30 transition-all duration-300 shadow-lg">
                          <AvatarFallback className="bg-gradient-to-br from-primary via-primary/80 to-accent text-primary-foreground font-bold text-xl">
                            VA
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-emerald-500 border-3 border-background shadow-lg flex items-center justify-center">
                          <span className="text-xs">✓</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors truncate">
                        {participant.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs font-normal bg-primary/5 border-primary/20">
                          Attempt #{participant.attempt}
                        </Badge>
                        <span className="text-xs text-muted-foreground">• Last active {participant.lastActive}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="bg-gradient-to-br from-background via-background to-muted/20 rounded-xl p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <span className="text-sm">📝</span>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Question Progress</p>
                          <p className="text-sm font-bold text-foreground">
                            {participant.questions} of {participant.total} answered
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{participant.progress}%</p>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={participant.progress} 
                        className="h-3 bg-muted/50" 
                      />
                      <div className="flex justify-between mt-2">
                        <span className="text-xs font-medium text-muted-foreground">Start</span>
                        <span className="text-xs font-medium text-primary">Complete</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="group/stat relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl p-4 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity" />
                      <div className="relative text-center">
                        <div className="text-2xl mb-1">🎯</div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Score</p>
                        <p className="text-2xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                          {participant.score}%
                        </p>
                      </div>
                    </div>
                    
                    <div className="group/stat relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent rounded-xl p-4 border border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity" />
                      <div className="relative text-center">
                        <div className="text-2xl mb-1">✅</div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Correct</p>
                        <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                          {participant.correct}
                        </p>
                        <p className="text-xs text-muted-foreground">of {participant.totalQuestions}</p>
                      </div>
                    </div>
                    
                    <div className="group/stat relative overflow-hidden bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-xl p-4 border border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity" />
                      <div className="relative text-center">
                        <div className="text-2xl mb-1">⏱️</div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Time</p>
                        <p className="text-xl font-bold text-accent">
                          {participant.lastActive}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg group-hover:shadow-xl transition-all"
                    size="lg"
                  >
                    <span className="mr-2">View Details</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State (when no participants) - Hidden for now */}
          {/* <div className="bg-gradient-to-br from-card to-muted/20 border-2 border-dashed border-border rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-foreground mb-2">No participants yet</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Share your test link to start seeing real-time participant data here
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
              Share Test Now
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
