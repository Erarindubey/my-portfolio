import React from "react";
import { cn } from "@/lib/utils";
import {
  Bot,
  Shield,
  Activity,
  Globe,
  Smartphone,
  Banknote,
  ArrowRight,
  Sparkles,
  Lock,
  Cpu,
  Flame,
  Radio,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

interface ProjectEditorialArtifactProps {
  slug: string;
  className?: string;
}

export function ProjectEditorialArtifact({ slug, className }: ProjectEditorialArtifactProps) {
  switch (slug) {
    case "relu-ai":
      return (
        <div className={cn("relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#FFFFFF] border border-[#DEDDD8] p-5 sm:p-7 flex flex-col justify-between overflow-hidden group/art select-none transition-all duration-500", className)}>
          {/* Subtle Project Gradient Back-glow (Restrained Violet) */}
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-[#EDE9FE] via-[#DDD6FE]/40 to-transparent blur-2xl pointer-events-none transition-transform duration-700 group-hover/art:scale-125" />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#6D28D9]/40 to-transparent opacity-0 group-hover/art:opacity-100 transition-opacity duration-500" />

          {/* Top Metadata Hairline with Pulse Marker */}
          <div className="relative z-10 flex items-center justify-between border-b border-[#DEDDD8]/80 pb-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6D28D9] animate-pulse" />
              <span className="uppercase tracking-[0.14em] text-[#111111] font-semibold text-[11px]">
                RELU ARCHITECTURE // RAG PIPELINE
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EDE9FE] text-[#6D28D9] text-[10px] font-medium">
              <Sparkles size={10} />
              <span>SYNTHESIS_ONLINE</span>
            </div>
          </div>

          {/* 4-Step Vector Pipeline */}
          <div className="relative z-10 my-auto py-5 flex flex-col gap-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              <div className="p-3 border border-[#DEDDD8] bg-[#F7F6F2]/80 flex flex-col justify-between gap-2 transition-all duration-300 group-hover/art:border-[#6D28D9]/30">
                <span className="text-[#94938C] text-[9px] uppercase tracking-wider">01 / Input</span>
                <span className="font-semibold text-[#111111] text-[11px] truncate">Prompt Context</span>
                <div className="h-1 w-full bg-[#DEDDD8] overflow-hidden rounded-full">
                  <div className="h-full bg-[#6D28D9] w-3/4 rounded-full transition-all duration-500 group-hover/art:w-full" />
                </div>
              </div>

              <div className="p-3 border border-[#DEDDD8] bg-[#F7F6F2]/80 flex flex-col justify-between gap-2 transition-all duration-300 group-hover/art:border-[#6D28D9]/30">
                <span className="text-[#94938C] text-[9px] uppercase tracking-wider">02 / Search</span>
                <span className="font-semibold text-[#111111] text-[11px] truncate">Vector Ingestion</span>
                <div className="h-1 w-full bg-[#DEDDD8] overflow-hidden rounded-full">
                  <div className="h-full bg-[#6D28D9] w-full rounded-full" />
                </div>
              </div>

              <div className="p-3 border border-[#DEDDD8] bg-[#F7F6F2]/80 flex flex-col justify-between gap-2 transition-all duration-300 group-hover/art:border-[#2563EB]/30">
                <span className="text-[#94938C] text-[9px] uppercase tracking-wider">03 / Tune</span>
                <span className="font-semibold text-[#111111] text-[11px] truncate">RAG Assembly</span>
                <div className="h-1 w-full bg-[#DEDDD8] overflow-hidden rounded-full">
                  <div className="h-full bg-[#2563EB] w-4/5 rounded-full" />
                </div>
              </div>

              <div className="p-3 border border-[#DEDDD8] bg-[#F7F6F2]/80 flex flex-col justify-between gap-2 transition-all duration-300 group-hover/art:border-[#6D28D9]/30">
                <span className="text-[#94938C] text-[9px] uppercase tracking-wider">04 / Action</span>
                <span className="font-semibold text-[#111111] text-[11px] truncate">Admin Triage</span>
                <div className="h-1 w-full bg-[#DEDDD8] overflow-hidden rounded-full">
                  <div className="h-full bg-[#6D28D9] w-full rounded-full" />
                </div>
              </div>
            </div>

            {/* Split Dialogue & Admin Fragment */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
              <div className="sm:col-span-7 border border-[#DEDDD8] p-3.5 bg-[#FAF9F5] flex flex-col gap-2 font-sans text-xs transition-colors duration-300 group-hover/art:bg-[#FFFFFF]">
                <div className="flex items-center justify-between border-b border-[#DEDDD8]/60 pb-1.5 font-mono text-[10px] text-[#686868]">
                  <span className="text-[#111111] font-semibold flex items-center gap-1">
                    <Bot size={11} className="text-[#6D28D9]" />
                    Conversational Interface
                  </span>
                  <span className="text-[#94938C]">STREAMING</span>
                </div>
                <div className="p-2 bg-white border border-[#DEDDD8] text-[11px] text-[#111111]/90 rounded-sm">
                  <span className="block font-mono text-[9px] text-[#94938C] uppercase mb-0.5">Prompt Inquiry</span>
                  Dynamic knowledge routing across vector collections.
                </div>
                <div className="p-2 bg-[#EDE9FE]/50 border border-[#6D28D9]/20 text-[11px] text-[#111111]/90 rounded-sm ml-auto max-w-[92%]">
                  <span className="block font-mono text-[9px] text-[#6D28D9] uppercase mb-0.5">RELU Agent</span>
                  Ingestion verified. Real-time context mapped to CRM lead.
                </div>
              </div>

              <div className="sm:col-span-5 border border-[#DEDDD8] p-3.5 bg-[#FAF9F5] flex flex-col justify-between font-mono text-xs transition-colors duration-300 group-hover/art:bg-[#FFFFFF]">
                <div className="flex items-center justify-between border-b border-[#DEDDD8]/60 pb-1.5 text-[10px]">
                  <span className="text-[#111111] font-semibold">Admin Core</span>
                  <span className="text-[#6D28D9] font-bold text-[9px]">MANAGED</span>
                </div>
                <div className="space-y-1.5 py-1 text-[10px]">
                  <div className="flex justify-between py-1 border-b border-[#DEDDD8]/40">
                    <span className="text-[#686868]">Vector DB</span>
                    <span className="text-[#111111] font-medium">Sync Active</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#686868]">Routing</span>
                    <span className="text-[#6D28D9] font-medium">Automated</span>
                  </div>
                </div>
                <span className="text-[9px] text-[#94938C] pt-1.5 border-t border-[#DEDDD8]/60">
                  REAL-TIME DISPATCH ENGINE
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Footnote */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#94938C] border-t border-[#DEDDD8]/80 pt-3">
            <span>RAG RETRIEVAL · VECTOR STORE · ADMIN PANEL</span>
            <span className="text-[#111111] font-medium uppercase tracking-wider">AI PRODUCT</span>
          </div>
        </div>
      );

    case "security-hrms":
      return (
        <div className={cn("relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#FFFFFF] border border-[#DEDDD8] p-5 sm:p-7 flex flex-col justify-between overflow-hidden group/art select-none transition-all duration-500", className)}>
          {/* Subtle Blue/Cyan Ambient Gradient Glow */}
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-[#DBEAFE] via-[#BFDBFE]/30 to-transparent blur-2xl pointer-events-none transition-transform duration-700 group-hover/art:scale-125" />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent opacity-0 group-hover/art:opacity-100 transition-opacity duration-500" />

          {/* Top Enterprise Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-[#DEDDD8]/80 pb-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="uppercase tracking-[0.14em] text-[#111111] font-semibold text-[11px]">
                WORKFORCE ORCHESTRATION // SYSTEM
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#DBEAFE] text-[#2563EB] text-[10px] font-medium">
              <Shield size={10} />
              <span>RBAC_ACTIVE</span>
            </div>
          </div>

          {/* 6-Phase Lifecycle Strip */}
          <div className="relative z-10 my-auto py-5 space-y-4">
            <div className="flex items-center justify-between gap-1 p-2 bg-[#F7F6F2]/80 border border-[#DEDDD8] text-[10px] font-mono overflow-x-auto no-scrollbar">
              <span className="px-2 py-0.5 bg-white border border-[#DEDDD8] font-semibold text-[#111111] shrink-0">01. Guards</span>
              <ArrowRight size={10} className="text-[#94938C] shrink-0" />
              <span className="px-2 py-0.5 bg-white border border-[#DEDDD8] font-semibold text-[#111111] shrink-0">02. Sites</span>
              <ArrowRight size={10} className="text-[#94938C] shrink-0" />
              <span className="px-2 py-0.5 bg-white border border-[#DEDDD8] font-semibold text-[#111111] shrink-0">03. Shifts</span>
              <ArrowRight size={10} className="text-[#94938C] shrink-0" />
              <span className="px-2 py-0.5 bg-white border border-[#DEDDD8] font-semibold text-[#111111] shrink-0">04. Attendance</span>
              <ArrowRight size={10} className="text-[#94938C] shrink-0" />
              <span className="px-2 py-0.5 bg-[#DBEAFE] border border-[#2563EB]/30 font-semibold text-[#2563EB] shrink-0">05. Approval</span>
            </div>

            {/* Split Shift Matrix & Access Topology */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-7 border border-[#DEDDD8] p-3.5 bg-[#FAF9F5] flex flex-col justify-between font-mono text-xs transition-colors duration-300 group-hover/art:bg-[#FFFFFF]">
                <div className="flex items-center justify-between border-b border-[#DEDDD8]/60 pb-1.5 text-[10px]">
                  <span className="text-[#111111] font-semibold flex items-center gap-1">
                    <Cpu size={11} className="text-[#2563EB]" />
                    Site Deployment Matrix
                  </span>
                  <span className="text-[#94938C]">ZONE POSTS</span>
                </div>
                <div className="space-y-1.5 py-2 text-[10px]">
                  <div className="p-1.5 bg-white border border-[#DEDDD8] flex justify-between">
                    <span className="text-[#111111] font-medium">Terminal Alpha</span>
                    <span className="text-[#686868]">Day Roster · Filled</span>
                  </div>
                  <div className="p-1.5 bg-white border border-[#DEDDD8] flex justify-between">
                    <span className="text-[#111111] font-medium">Perimeter South</span>
                    <span className="text-[#2563EB] font-medium">Patrol Dynamic</span>
                  </div>
                </div>
                <div className="text-[9px] text-[#94938C] flex justify-between border-t border-[#DEDDD8]/60 pt-1.5">
                  <span>SCHEDULER ENGINE</span>
                  <span className="text-[#111111] font-semibold">CONFLICT FREE</span>
                </div>
              </div>

              <div className="sm:col-span-5 border border-[#DEDDD8] p-3.5 bg-[#FAF9F5] flex flex-col justify-between font-mono text-xs transition-colors duration-300 group-hover/art:bg-[#FFFFFF]">
                <div className="flex items-center justify-between border-b border-[#DEDDD8]/60 pb-1.5 text-[10px]">
                  <span className="text-[#111111] font-semibold">Scoped Portals</span>
                  <span className="text-[#2563EB] font-bold text-[9px]">TIERED</span>
                </div>
                <div className="space-y-1 py-1 text-[10px]">
                  <div className="p-1.5 bg-white border border-[#DEDDD8] flex justify-between">
                    <span className="text-[#111111]">Field Guards</span>
                    <span className="text-[#94938C]">Mobile</span>
                  </div>
                  <div className="p-1.5 bg-white border border-[#DEDDD8] flex justify-between">
                    <span className="text-[#111111]">Supervisors</span>
                    <span className="text-[#94938C]">Dispatch</span>
                  </div>
                  <div className="p-1.5 bg-white border border-[#DEDDD8] flex justify-between">
                    <span className="text-[#111111]">Client Admin</span>
                    <span className="text-[#2563EB]">Audited</span>
                  </div>
                </div>
                <div className="text-[9px] text-[#94938C] border-t border-[#DEDDD8]/60 pt-1.5">
                  AUDIT TRAILS VERIFIED
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footnote */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#94938C] border-t border-[#DEDDD8]/80 pt-3">
            <span>WORKFORCE SCHEDULING · POSTGRESQL · RBAC</span>
            <span className="text-[#111111] font-medium uppercase tracking-wider">ENTERPRISE FLAGSHIP</span>
          </div>
        </div>
      );

    case "treadmill-tracker":
      return (
        <div className={cn("relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-[#FFFFFF] border border-[#DEDDD8] p-5 sm:p-6 flex flex-col justify-between overflow-hidden group/art select-none transition-all duration-500", className)}>
          {/* Subtle Emerald / Athletic Green Glow */}
          <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-gradient-to-br from-[#D1FAE5] via-[#A7F3D0]/30 to-transparent blur-2xl pointer-events-none transition-transform duration-700 group-hover/art:scale-125" />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#059669]/40 to-transparent opacity-0 group-hover/art:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 flex items-center justify-between border-b border-[#DEDDD8]/80 pb-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#111111] font-semibold text-[11px]">
              <Activity size={13} className="text-[#059669]" />
              <span>CADENCE TELEMETRY & METRICS</span>
            </div>
            <span className="text-[10px] text-[#059669] font-medium bg-[#D1FAE5] px-2 py-0.5 rounded-full">
              LIVE_METRIC
            </span>
          </div>

          <div className="relative z-10 my-auto py-4 space-y-3 font-mono">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="block text-[9px] text-[#94938C] uppercase tracking-wider">Daily Session Pace</span>
                <span className="text-2xl sm:text-3xl font-sans font-bold text-[#111111]">
                  4&apos;32&quot; <span className="text-xs font-mono font-normal text-[#686868]">/km</span>
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[9px] text-[#94938C] uppercase tracking-wider">Leaderboard</span>
                <span className="text-sm font-semibold text-[#059669]">#03 Active Rank</span>
              </div>
            </div>

            {/* Dynamic Cadence Rhythm Bars with Hover Height Shift */}
            <div className="flex items-end gap-1.5 h-14 pt-2">
              {[35, 60, 48, 80, 68, 92, 58, 76, 96, 72, 88, 82, 64, 85].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 bg-[#DEDDD8] rounded-t-[1px] group-hover/art:bg-[#059669] transition-all duration-300"
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#94938C] border-t border-[#DEDDD8]/60 pt-3">
            <span>SVG TELEMETRY · RUN ANALYTICS</span>
            <span className="text-[#111111] uppercase font-medium">ATHLETIC PRODUCT</span>
          </div>
        </div>
      );

    case "fursa-live":
      return (
        <div className={cn("relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-[#FFFFFF] border border-[#DEDDD8] p-5 sm:p-6 flex flex-col justify-between overflow-hidden group/art select-none transition-all duration-500", className)}>
          {/* Subtle Amber / Solar Gold Glow */}
          <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-gradient-to-br from-[#FEF3C7] via-[#FDE68A]/30 to-transparent blur-2xl pointer-events-none transition-transform duration-700 group-hover/art:scale-125" />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D97706]/40 to-transparent opacity-0 group-hover/art:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 flex items-center justify-between border-b border-[#DEDDD8]/80 pb-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#111111] font-semibold text-[11px]">
              <Globe size={13} className="text-[#D97706]" />
              <span>PAN-AFRICAN FOUNDER ECOSYSTEM</span>
            </div>
            <span className="text-[10px] text-[#D97706] font-medium bg-[#FEF3C7] px-2 py-0.5 rounded-full">
              NETWORK_SYNC
            </span>
          </div>

          <div className="relative z-10 my-auto py-3 space-y-2.5 font-mono text-xs">
            <div className="p-3 bg-[#FAF9F5] border border-[#DEDDD8] space-y-1.5 transition-colors duration-300 group-hover/art:bg-[#FFFFFF]">
              <div className="flex items-center justify-between">
                <span className="text-[#111111] font-bold text-[11px]">Founder Hubs Active</span>
                <span className="text-[#D97706] font-medium text-[10px]">Nairobi · Lagos · Cairo</span>
              </div>
              <p className="font-sans text-[11px] text-[#686868] leading-relaxed">
                Peer mentorship exchanges, venture pathways, and regional market intelligence.
              </p>
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#686868] px-1">
              <span>Cohort Streams</span>
              <span className="text-[#111111] font-medium">Collaborative Peer Hubs</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#94938C] border-t border-[#DEDDD8]/60 pt-3">
            <span>COMMUNITY INFRASTRUCTURE</span>
            <span className="text-[#111111] uppercase font-medium">FOUNDER PLATFORM</span>
          </div>
        </div>
      );

    case "pivot-guard":
      return (
        <div className={cn("relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-[#FFFFFF] border border-[#DEDDD8] p-5 sm:p-6 flex flex-col justify-between overflow-hidden group/art select-none transition-all duration-500", className)}>
          {/* Subtle Crimson / Security Alert Glow */}
          <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-gradient-to-br from-[#FEE2E2] via-[#FECACA]/30 to-transparent blur-2xl pointer-events-none transition-transform duration-700 group-hover/art:scale-125" />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#DC2626]/40 to-transparent opacity-0 group-hover/art:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 flex items-center justify-between border-b border-[#DEDDD8]/80 pb-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#111111] font-semibold text-[11px]">
              <Smartphone size={13} className="text-[#DC2626]" />
              <span>FIELD SECURITY PATROL ENGINE</span>
            </div>
            <span className="text-[10px] text-[#DC2626] font-medium bg-[#FEE2E2] px-2 py-0.5 rounded-full">
              OFFLINE_READY
            </span>
          </div>

          <div className="relative z-10 my-auto py-3 space-y-2.5 font-mono text-xs">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 bg-[#FAF9F5] border border-[#DEDDD8] transition-colors duration-300 group-hover/art:bg-[#FFFFFF]">
                <span className="block text-[9px] text-[#94938C] uppercase">Checkpoints</span>
                <span className="text-xs font-semibold text-[#111111]">Offline-First</span>
              </div>
              <div className="p-2.5 bg-[#FAF9F5] border border-[#DEDDD8] transition-colors duration-300 group-hover/art:bg-[#FFFFFF]">
                <span className="block text-[9px] text-[#94938C] uppercase">Telemetry</span>
                <span className="text-xs font-semibold text-[#DC2626]">&lt; 1.2s Push</span>
              </div>
            </div>
            <div className="p-2 bg-background border border-[#DEDDD8] flex items-center justify-between text-[10px]">
              <span className="text-[#111111]">Geo-fenced Patrol Perimeter</span>
              <span className="text-[#059669] font-medium">Secured</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#94938C] border-t border-[#DEDDD8]/60 pt-3">
            <span>FLUTTER · DART ARCHITECTURE</span>
            <span className="text-[#111111] uppercase font-medium">MOBILE GUARD SYSTEM</span>
          </div>
        </div>
      );

    case "kreditcall-loan-lending":
      return (
        <div className={cn("relative w-full h-full min-h-[260px] sm:min-h-[300px] bg-[#FFFFFF] border border-[#DEDDD8] p-5 sm:p-6 flex flex-col justify-between overflow-hidden group/art select-none transition-all duration-500", className)}>
          {/* Subtle Indigo / Fintech Glow */}
          <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-gradient-to-br from-[#E0E7FF] via-[#C7D2FE]/30 to-transparent blur-2xl pointer-events-none transition-transform duration-700 group-hover/art:scale-125" />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4F46E5]/40 to-transparent opacity-0 group-hover/art:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 flex items-center justify-between border-b border-[#DEDDD8]/80 pb-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#111111] font-semibold text-[11px]">
              <Banknote size={13} className="text-[#4F46E5]" />
              <span>LOAN LENDING & CREDIT WORKFLOWS</span>
            </div>
            <span className="text-[10px] text-[#4F46E5] font-medium bg-[#E0E7FF] px-2 py-0.5 rounded-full">
              STORE_LIVE
            </span>
          </div>

          <div className="relative z-10 my-auto py-3 space-y-2.5 font-mono text-xs">
            <div className="p-3 bg-[#FAF9F5] border border-[#DEDDD8] flex items-center justify-between transition-colors duration-300 group-hover/art:bg-[#FFFFFF]">
              <div>
                <span className="block text-[9px] text-[#94938C] uppercase">Borrower Journey</span>
                <span className="text-[11px] font-sans font-bold text-[#111111]">KYC Identity & Underwriting</span>
              </div>
              <span className="text-[#4F46E5] font-bold text-[10px]">100% Mobile</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-center text-[9px]">
              <div className="p-1.5 bg-background border border-[#DEDDD8]">KYC Check</div>
              <div className="p-1.5 bg-background border border-[#DEDDD8]">Origination</div>
              <div className="p-1.5 bg-background border border-[#DEDDD8]">Repayment</div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#94938C] border-t border-[#DEDDD8]/60 pt-3">
            <span>FINTECH MOBILE · APP STORE RELEASE</span>
            <span className="text-[#111111] uppercase font-medium">PRODUCTION LENDING</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
