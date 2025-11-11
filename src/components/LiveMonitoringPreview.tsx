import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Clock, TrendingUp, CheckCircle, Download, Share2, Copy, Search, ChevronDown } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Safari } from "@/components/ui/safari";
const StatCard = ({
  label,
  value,
  icon,
  showDot = false
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  showDot?: boolean;
}) => <div className="space-y-1">
    <div className="text-xs text-muted-foreground">{label}</div>
    <div className="flex items-center gap-2">
      {showDot && <div className="h-2 w-2 rounded-full bg-green-500" />}
      {icon}
      <div className="text-2xl font-bold text-foreground">{value}</div>
    </div>
  </div>;
const ParticipantCard = ({
  name,
  attempt,
  questions,
  score,
  correct,
  active,
  status
}: {
  name: string;
  attempt: string;
  questions: string;
  score: string;
  correct: string;
  active: string;
  status: 'Completed' | 'In Progress';
}) => {
  return <Card className="p-4 bg-card/50">
      <div className="flex items-start gap-3 mb-3">
        <Avatar className="h-10 w-10">
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <div className="font-medium text-foreground">{name}</div>
            <Badge className={`${status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'} text-white border-0 text-xs`}>
              {status}
            </Badge>
          </div>
          <div className="text-xs text-muted-foreground">{attempt}</div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Pertanyaan</span>
          <span className="font-semibold text-foreground">{questions}</span>
        </div>
        <Progress value={parseInt(score)} className="h-2" />
        
        <div className="grid grid-cols-3 gap-4 text-xs pt-2">
          <div>
            <div className="text-muted-foreground mb-1">Skor</div>
            <div className="font-semibold text-foreground">{score}%</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-1">Benar</div>
            <div className="font-semibold text-foreground">{correct}</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-1">Aktif</div>
            <div className="font-semibold text-foreground">{active}</div>
          </div>
        </div>
      </div>
    </Card>;
};
export const LiveMonitoringPreview = () => {
  return <section className="pt-2 pb-12 md:pt-4 md:pb-20 lg:pt-6 lg:pb-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        

        {/* Safari Browser Frame */}
        <div className="relative max-w-6xl mx-auto">
          <Safari url="https://ngerti.in/join/MHF6RF" width={1203} height={753} mode="default" className="w-full h-auto">
            {/* Dashboard Content */}
            <div className="w-full h-full bg-[#1a1a1a] text-white p-4 md:p-6 overflow-auto">
              {/* Header */}
              <div className="mb-6 pb-4 border-b border-border/20">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold mb-1">UTS Diferensial Kelas B</h3>
                    <p className="text-sm text-muted-foreground">
                      Sesi sudah berakhir pada 11 Nov 2025 pukul 16:29
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      <Copy className="h-3 w-3 mr-1" />
                      Pengaturan
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 pb-6 border-b border-border/20">
                <StatCard label="Participants" value="2" icon={<Users className="h-4 w-4 text-muted-foreground" />} />
                <StatCard label="Active now" value="0" icon={<Clock className="h-4 w-4 text-green-500" />} showDot={true} />
                <StatCard label="Average Score" value="5.0" icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />} />
                <StatCard label="Completion Rate" value="100%" icon={<CheckCircle className="h-4 w-4 text-muted-foreground" />} />
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-3 gap-6 mb-6">
                {/* Distribusi Skor */}
                <div className="lg:col-span-2">
                  <Card className="p-4 bg-card/30">
                    <h4 className="font-semibold mb-2">Distribusi Skor</h4>
                    <p className="text-xs text-muted-foreground mb-4">
                      Distribusi nilai peserta dalam sesi ini
                    </p>
                    
                    {/* Simple Bar Chart */}
                    <div className="relative h-48 flex items-end gap-8 px-4">
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-blue-500 rounded-t" style={{
                        height: '180px'
                      }} />
                        <span className="text-xs text-muted-foreground">0-20</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-blue-500/20 rounded-t" style={{
                        height: '0px'
                      }} />
                        <span className="text-xs text-muted-foreground">21-40</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-blue-500/20 rounded-t" style={{
                        height: '0px'
                      }} />
                        <span className="text-xs text-muted-foreground">41-60</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-blue-500/20 rounded-t" style={{
                        height: '0px'
                      }} />
                        <span className="text-xs text-muted-foreground">61-80</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-blue-500/20 rounded-t" style={{
                        height: '0px'
                      }} />
                        <span className="text-xs text-muted-foreground">81-100</span>
                      </div>
                    </div>
                    
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-48 flex flex-col justify-between text-xs text-muted-foreground py-2">
                      <span>2</span>
                      <span>1.5</span>
                      <span>1</span>
                      <span>0.5</span>
                      <span>0</span>
                    </div>
                  </Card>
                </div>

                {/* Bagikan Test */}
                <div>
                  <Card className="p-4 bg-card/30">
                    <h4 className="font-semibold mb-2">Bagikan Test</h4>
                    <p className="text-xs text-muted-foreground mb-4">
                      Kode akses untuk peserta
                    </p>
                    
                    {/* QR Code */}
                    <div className="bg-white p-4 rounded-lg mb-4 flex items-center justify-center">
                      <div className="w-32 h-32 bg-black/10 rounded flex items-center justify-center">
                        <div className="text-6xl">▦</div>
                      </div>
                    </div>
                    
                    {/* Access Code */}
                    <div className="text-center mb-4">
                      <div className="text-xs text-muted-foreground mb-1">Kode Akses</div>
                      <div className="text-2xl font-bold tracking-wider">MHF6RF</div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2 mb-3">
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        <Share2 className="h-3 w-3 mr-1" />
                        Salin QR
                      </Button>
                    </div>
                    
                    {/* Link */}
                    <div className="flex items-center gap-2 bg-background/50 rounded px-3 py-2">
                      <input type="text" value="https://ngerti.in/join/MHF6RF" readOnly className="flex-1 bg-transparent text-xs outline-none" />
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <Button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white" size="sm">
                      Salin Link Lengkap
                    </Button>
                  </Card>
                </div>
              </div>

              {/* Monitoring Langsung */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Monitoring Langsung</h4>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  Pantau progress peserta secara real-time
                </p>
                
                {/* Search and Filters */}
                <div className="flex gap-2 mb-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Cari peserta..." className="pl-9 bg-background/50" />
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">
                    Urutan: Skor
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    Semua Status
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </Button>
                </div>
                
                {/* Participant Cards */}
                <div className="grid md:grid-cols-2 gap-4">
                  <ParticipantCard name="Vito Andareas Manik" attempt="Percobaan ke-1" questions="20/20" score="10" correct="2/20" active="1d ago" status="Completed" />
                  <ParticipantCard name="Vito Andareas Manik" attempt="Percobaan ke-2" questions="4/20" score="0" correct="0/4" active="1d ago" status="Completed" />
                </div>
              </div>
            </div>
          </Safari>
        </div>
      </div>
    </section>;
};