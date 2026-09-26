import React from "react";
import { cn } from "@/lib/utils";
import {
  Shield,
  Bot,
  Activity,
  Globe,
  Smartphone,
  Banknote,
  Sparkles,
  Sliders,
  MessageSquare,
  Users,
  Calendar,
  Clock,
  Layers,
} from "lucide-react";

interface ProjectAbstractArtProps {
  slug: string;
  className?: string;
  isFlagship?: boolean;
}

export function ProjectAbstractArt({ slug, className, isFlagship = false }: ProjectAbstractArtProps) {
  switch (slug) {
    case "relu-ai":
      return (
        <div className={cn("relative w-full h-full min-h-[280px] sm:min-h-[360px] md:min-h-[420px] bg-gradient-to-br from-surface-elevated via-muted/40 to-accent-subtle/40 rounded-2xl border border-border p-6 sm:p-8 flex flex-col justify-between overflow-hidden group/art", className)}>
          {/* Ambient AI Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/30 blur-3xl pointer-events-none transition-transform duration-700 group-hover/art:scale-125" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-border/40 blur-3xl pointer-events-none" />

          {/* Top Bar: AI Product + Admin Panel Status */}
          <div className="relative z-10 flex items-center justify-between border-b border-border/60 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accent-light shadow-2xs">
                <Bot size={16} />
              </div>
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-foreground font-semibold">
                  RELU AI // Conversational Agent + Admin Engine
                </span>
                <span className="block font-mono text-[9px] text-subtle">
                  RAG PIPELINE · VECTOR STORE · LEAD INGESTION
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-[10px] text-accent-light bg-surface-elevated/90 px-2.5 py-1 rounded-full border border-border">
              <Sparkles size={11} className="text-accent-light" />
              <span>ACTIVE MODEL</span>
            </div>
          </div>

          {/* Central Composition: Split Chatbot Interaction + Admin Control Console */}
          <div className="relative z-10 my-auto py-5 grid grid-cols-1 sm:grid-cols-12 gap-4">
            {/* Left: Dynamic Chatbot Interaction Preview */}
            <div className="sm:col-span-7 bg-surface-elevated/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-border shadow-xs flex flex-col gap-3 group-hover/art:border-border-strong transition-colors">
              <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground border-b border-border/40 pb-2">
                <span className="flex items-center gap-1.5 text-foreground font-medium">
                  <MessageSquare size={13} className="text-accent-light" />
                  Dynamic Chatbot Interface
                </span>
                <span className="text-subtle font-mono text-[10px]">RAG ACTIVE</span>
              </div>

              {/* Chat Thread Snippet */}
              <div className="space-y-2.5 pt-1">
                <div className="p-2.5 rounded-lg bg-muted/50 border border-border/40 max-w-[85%] text-xs text-foreground/90">
                  <span className="block text-[10px] font-mono text-subtle mb-0.5">User Prompt</span>
                  Can you summarize our product catalog and capture the buyer lead?
                </div>
                <div className="p-2.5 rounded-lg bg-accent-subtle/40 border border-accent/40 max-w-[90%] ml-auto text-xs text-foreground/90">
                  <span className="block text-[10px] font-mono text-accent-light mb-0.5">RELU Agent Response</span>
                  Catalog verified via vector search. Lead captured into Admin CRM with high purchase intent.
                </div>
              </div>
            </div>

            {/* Right: Custom Admin Panel Metrics */}
            <div className="sm:col-span-5 bg-surface-elevated/70 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-border flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-mono text-subtle border-b border-border/40 pb-2">
                <span className="flex items-center gap-1">
                  <Sliders size={12} className="text-accent-light" />
                  Admin Console
                </span>
                <span>TRIAGE</span>
              </div>

              <div className="space-y-2 py-3 font-mono text-xs">
                <div className="flex justify-between items-center p-2 rounded bg-muted/40 border border-border/40">
                  <span className="text-[10px] text-subtle">Captured Leads</span>
                  <span className="font-bold text-foreground">1,482</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-muted/40 border border-border/40">
                  <span className="text-[10px] text-subtle">RAG Precision</span>
                  <span className="font-bold text-accent-light">98.4%</span>
                </div>
              </div>

              <div className="text-[9px] font-mono text-subtle pt-1 flex items-center justify-between">
                <span>Prompt Engineering</span>
                <span className="text-emerald-600 font-semibold">Tuned v2.1</span>
              </div>
            </div>
          </div>

          {/* Bottom Footnote */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-subtle pt-3 border-t border-border/50">
            <span>CUSTOM CHATBOT · ADMIN PLATFORM</span>
            <span className="text-foreground">AI PRODUCT DEPLOYMENT</span>
          </div>
        </div>
      );

    case "security-hrms":
      return (
        <div className={cn("relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[480px] bg-gradient-to-br from-surface-elevated via-muted/30 to-border/40 rounded-2xl border border-border p-6 sm:p-8 flex flex-col justify-between overflow-hidden group/art", className)}>
          {/* Enterprise Structural Depth */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-border-strong/30 blur-3xl pointer-events-none transition-transform duration-700 group-hover/art:scale-125" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

          {/* Top Enterprise Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-border/60 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accent-light shadow-2xs">
                <Shield size={16} />
              </div>
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-foreground font-semibold">
                  Security HRMS // Enterprise Workforce Management
                </span>
                <span className="block font-mono text-[9px] text-subtle">
                  MULTI-SITE OPERATIONS · RBAC SCOPED ROLES · BIOMETRIC ATTENDANCE
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>ENTERPRISE LIVE</span>
            </div>
          </div>

          {/* Central Enterprise Operations Dashboard Simulation */}
          <div className="relative z-10 my-auto py-5 grid grid-cols-1 sm:grid-cols-12 gap-4">
            {/* Left Micro Panel: Shift Roster & Personnel Scheduling */}
            <div className="sm:col-span-7 bg-surface-elevated/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-border shadow-xs flex flex-col gap-3 group-hover/art:border-border-strong transition-colors">
              <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground border-b border-border/40 pb-2">
                <span className="flex items-center gap-1.5 text-foreground font-medium">
                  <Calendar size={13} className="text-accent-light" />
                  Shift Roster & Deployment Scheduling
                </span>
                <span className="text-subtle font-mono text-[10px]">ZONE A · B · C</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-2.5 rounded-lg bg-muted/40 border border-border/50">
                  <span className="block text-[10px] font-mono text-subtle">Active Guards</span>
                  <span className="font-mono text-sm sm:text-base font-semibold text-foreground">340 On-Duty</span>
                </div>
                <div className="p-2.5 rounded-lg bg-muted/40 border border-border/50">
                  <span className="block text-[10px] font-mono text-subtle">Shift Coverage</span>
                  <span className="font-mono text-sm sm:text-base font-semibold text-emerald-600">100% Filled</span>
                </div>
                <div className="p-2.5 rounded-lg bg-muted/40 border border-border/50">
                  <span className="block text-[10px] font-mono text-subtle">RBAC Layers</span>
                  <span className="font-mono text-sm sm:text-base font-semibold text-accent-light">Admin / Client</span>
                </div>
              </div>

              {/* Real-time Timesheet Approval Status */}
              <div className="p-2.5 rounded-lg bg-background border border-border/40 font-mono text-[10px] text-muted-foreground space-y-1">
                <div className="flex justify-between">
                  <span className="text-foreground">Timesheet.verifyBiometrics()</span>
                  <span className="text-emerald-600">PASSED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-subtle">PayrollExport.generateAuditBatch()</span>
                  <span className="text-foreground font-medium">AUDITED</span>
                </div>
              </div>
            </div>

            {/* Right Micro Panel: Security Industry Scoped Portals */}
            <div className="sm:col-span-5 bg-surface-elevated/70 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-border flex flex-col justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-subtle block">
                Scoped Portal Architecture
              </span>
              <div className="space-y-2 py-3">
                <div className="flex items-center justify-between text-xs font-mono p-2 rounded bg-surface-elevated border border-border">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Users size={12} className="text-accent-light" />
                    Security Guards
                  </span>
                  <span className="text-[10px] text-subtle">Mobile View</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono p-2 rounded bg-surface-elevated border border-border">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Layers size={12} className="text-accent-light" />
                    Site Supervisors
                  </span>
                  <span className="text-[10px] text-subtle">Roster Dispatch</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono p-2 rounded bg-surface-elevated border border-border">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <Shield size={12} className="text-accent-light" />
                    Client Enterprise
                  </span>
                  <span className="text-[10px] text-subtle">Audit & Billing</span>
                </div>
              </div>
              <div className="text-[10px] font-mono text-muted-foreground flex items-center justify-between pt-1">
                <span>Production Architecture</span>
                <span className="text-accent-light font-medium">Postgres + RBAC</span>
              </div>
            </div>
          </div>

          {/* Bottom Footnote */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-subtle pt-3 border-t border-border/50">
            <span>ENTERPRISE HRMS · WORKFORCE & SHIFTS</span>
            <span className="text-foreground">STANDALONE PRODUCTION FLAGSHIP</span>
          </div>
        </div>
      );

    case "treadmill-tracker":
      return (
        <div className={cn("relative w-full h-full min-h-[240px] sm:min-h-[290px] bg-gradient-to-br from-surface-elevated to-muted/40 rounded-2xl border border-border p-6 flex flex-col justify-between overflow-hidden group/art", className)}>
          <div className="flex items-center justify-between border-b border-border/50 pb-3">
            <div className="flex items-center gap-2 text-foreground font-mono text-xs">
              <Activity size={15} className="text-accent-light" />
              <span className="font-semibold">Cadence & Distance Tracker</span>
            </div>
            <span className="font-mono text-[10px] text-subtle">LIVE TELEMETRY</span>
          </div>

          {/* Athletic Waveform / Run Metric Graphic */}
          <div className="my-auto py-4 flex flex-col gap-3">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="block text-[10px] font-mono text-subtle">Pace Average</span>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-foreground">4&apos;32&quot; <span className="text-xs font-normal text-muted-foreground">/km</span></span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] font-mono text-subtle">Leaderboard Rank</span>
                <span className="font-mono text-lg sm:text-xl font-semibold text-accent-light">#03 / Top 2%</span>
              </div>
            </div>

            {/* Simulated Dynamic Rhythm Bars */}
            <div className="flex items-end gap-1.5 h-14 pt-2">
              {[40, 65, 50, 85, 70, 95, 60, 80, 100, 75, 90, 85, 65, 80].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 bg-border-strong rounded-t-sm group-hover/art:bg-accent transition-colors duration-300"
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-subtle pt-2 border-t border-border/40">
            <span>REACT 19 · SVG TELEMETRY</span>
            <span className="text-foreground">ATHLETIC RUN PRODUCT</span>
          </div>
        </div>
      );

    case "fursa-live":
      return (
        <div className={cn("relative w-full h-full min-h-[240px] sm:min-h-[290px] bg-gradient-to-br from-surface-elevated to-muted/40 rounded-2xl border border-border p-6 flex flex-col justify-between overflow-hidden group/art", className)}>
          <div className="flex items-center justify-between border-b border-border/50 pb-3">
            <div className="flex items-center gap-2 text-foreground font-mono text-xs">
              <Globe size={15} className="text-accent-light" />
              <span className="font-semibold">Pan-African Founder Network</span>
            </div>
            <span className="font-mono text-[10px] text-accent-light bg-accent-subtle/50 px-2 py-0.5 rounded-full">EMERGING MARKETS</span>
          </div>

          <div className="my-auto py-4 space-y-3">
            <div className="p-3.5 rounded-xl bg-surface-elevated border border-border shadow-2xs">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-foreground font-semibold">Founder Hubs Active</span>
                <span className="text-accent-light">Nairobi · Lagos · Cairo</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Peer mentorship exchanges, venture capital pathways, and localized entrepreneurial market insights.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>COMMUNITY COHORTS // LIVE SESSIONS ACTIVE</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-subtle pt-2 border-t border-border/40">
            <span>REACT · COMMUNITY PLATFORM</span>
            <span className="text-foreground">AFRICAN ECOSYSTEM</span>
          </div>
        </div>
      );

    case "pivot-guard":
      return (
        <div className={cn("relative w-full h-full min-h-[240px] sm:min-h-[290px] bg-gradient-to-br from-surface-elevated to-muted/40 rounded-2xl border border-border p-6 flex flex-col justify-between overflow-hidden group/art", className)}>
          <div className="flex items-center justify-between border-b border-border/50 pb-3">
            <div className="flex items-center gap-2 text-foreground font-mono text-xs">
              <Smartphone size={15} className="text-accent-light" />
              <span className="font-semibold">Field Patrol & Incident Dispatch</span>
            </div>
            <span className="font-mono text-[10px] text-subtle">CROSS-PLATFORM</span>
          </div>

          <div className="my-auto py-4 flex flex-col gap-2.5">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 rounded-lg bg-surface-elevated border border-border">
                <span className="block text-[10px] font-mono text-subtle">Checkpoint Sync</span>
                <span className="font-mono text-sm font-semibold text-foreground">Offline-First</span>
              </div>
              <div className="p-3 rounded-lg bg-surface-elevated border border-border">
                <span className="block text-[10px] font-mono text-subtle">Dispatch Response</span>
                <span className="font-mono text-sm font-semibold text-accent-light">&lt; 1.2s Push</span>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-muted/30 border border-border/60 text-[11px] font-mono text-foreground flex items-center justify-between">
              <span>Geo-fenced Patrol Perimeter</span>
              <span className="text-emerald-600 font-medium">Secured</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-subtle pt-2 border-t border-border/40">
            <span>FLUTTER · DART · WEBSOCKETS</span>
            <span className="text-foreground">MOBILE SECURITY APP</span>
          </div>
        </div>
      );

    case "kreditcall-loan-lending":
      return (
        <div className={cn("relative w-full h-full min-h-[240px] sm:min-h-[290px] bg-gradient-to-br from-surface-elevated to-muted/40 rounded-2xl border border-border p-6 flex flex-col justify-between overflow-hidden group/art", className)}>
          <div className="flex items-center justify-between border-b border-border/50 pb-3">
            <div className="flex items-center gap-2 text-foreground font-mono text-xs">
              <Banknote size={15} className="text-accent-light" />
              <span className="font-semibold">Credit Engine & Loan Origination</span>
            </div>
            <span className="font-mono text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">APP STORE LIVE</span>
          </div>

          <div className="my-auto py-4 space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-surface-elevated border border-border">
              <div>
                <span className="block text-[10px] font-mono text-subtle">Onboarding Flow</span>
                <span className="text-xs font-semibold text-foreground">KYC Identity Verification</span>
              </div>
              <span className="font-mono text-xs text-accent-light font-bold">100% Mobile</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded bg-muted/40 border border-border text-[10px] font-mono text-muted-foreground">Borrower Score</div>
              <div className="p-2 rounded bg-muted/40 border border-border text-[10px] font-mono text-muted-foreground">Disbursement</div>
              <div className="p-2 rounded bg-muted/40 border border-border text-[10px] font-mono text-muted-foreground">Repayment</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-subtle pt-2 border-t border-border/40">
            <span>MOBILE FINTECH · STORE RELEASE</span>
            <span className="text-foreground">PRODUCTION LOAN APP</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
