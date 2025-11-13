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

        {/* Monitoring Section */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Monitoring Langsung</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Pantau progress peserta secara real-time
          </p>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari peserta..."
                className="pl-10 bg-background"
              />
            </div>
            <Select defaultValue="score">
              <SelectTrigger className="w-full md:w-48 bg-background">
                <SelectValue placeholder="Urutkan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="score">Urutkan: Skor</SelectItem>
                <SelectItem value="name">Urutkan: Nama</SelectItem>
                <SelectItem value="time">Urutkan: Waktu</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-48 bg-background">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Participant Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {participants.map((participant) => (
              <div
                key={participant.id}
                className="bg-background border border-border rounded-lg p-5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-muted text-muted-foreground font-medium">
                        VA
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{participant.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Percobaan ke-{participant.attempt}
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-emerald-500 hover:bg-emerald-500 text-white">
                    {participant.status}
                  </Badge>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Pertanyaan</span>
                    <span className="text-sm font-medium">
                      {participant.questions}/{participant.total}
                    </span>
                  </div>
                  <Progress value={participant.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-3 gap-4 pt-3 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Skor</p>
                    <p className="text-lg font-bold">{participant.score}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Benar</p>
                    <p className="text-lg font-bold">
                      {participant.correct}/{participant.totalQuestions}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Aktif</p>
                    <p className="text-lg font-bold">{participant.lastActive}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
