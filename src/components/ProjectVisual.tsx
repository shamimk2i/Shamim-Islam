import { useMemo } from 'react';
import { Project } from '../types';
import { Terminal, Cpu, Mic, Gamepad2, Crop, Radio, Sparkles } from 'lucide-react';

interface ProjectVisualProps {
  project: Project;
  aspectClass?: string;
  isInteractive?: boolean;
}

export function ProjectVisual({ project, aspectClass = "aspect-[16/10]", isInteractive = false }: ProjectVisualProps) {
  const visual = useMemo(() => {
    switch (project.visualType) {
      case 'code-editor':
        return (
          <div className="w-full h-full bg-[#161616] text-[#E0DFDA] font-mono-meta flex flex-col justify-between p-5 sm:p-7 select-none relative overflow-hidden">
            {/* Background subtle grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
            
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E56B55]/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F2BD38]/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#68715F]" />
                <span className="ml-2 text-[11px] text-[#A0A09B] tracking-wider">playground.js / Live Sandbox</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#68715F] uppercase tracking-widest rounded-xs">
                Real-Time Eval
              </span>
            </div>

            {/* Code Body & Split Preview */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 my-auto py-2 text-[11px] sm:text-xs">
              <div className="md:col-span-7 space-y-1.5 text-[#C8C7C0]">
                <div className="flex gap-3 text-white/30">
                  <span className="w-4 text-right">1</span>
                  <span><span className="text-[#8E8D88]">// Real-time in-browser code compiler</span></span>
                </div>
                <div className="flex gap-3">
                  <span className="w-4 text-right text-white/30">2</span>
                  <span><span className="text-[#F2BD38]">const</span> editor = <span className="text-[#68715F]">createSandbox</span>({'{'}</span>
                </div>
                <div className="flex gap-3 pl-4">
                  <span className="w-4 text-right text-white/30">3</span>
                  <span>mode: <span className="text-[#A5C28F]">&apos;iframe-isolated&apos;</span>,</span>
                </div>
                <div className="flex gap-3 pl-4">
                  <span className="w-4 text-right text-white/30">4</span>
                  <span>debounceMs: <span className="text-[#E56B55]">150</span>,</span>
                </div>
                <div className="flex gap-3 pl-4">
                  <span className="w-4 text-right text-white/30">5</span>
                  <span>renderTarget: <span className="text-[#A5C28F]">&apos;#live-viewport&apos;</span></span>
                </div>
                <div className="flex gap-3">
                  <span className="w-4 text-right text-white/30">6</span>
                  <span>{'}'});</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="w-4 text-right text-white/30">7</span>
                  <span>editor.<span className="text-[#68715F]">eval</span>();</span>
                  <span className="inline-block w-1.5 h-3.5 bg-[#68715F] animate-pulse ml-1" />
                </div>
              </div>

              {/* Simulated Live Frame Output */}
              <div className="md:col-span-5 hidden md:flex flex-col bg-[#0F0F0F] border border-white/10 rounded p-3 justify-between">
                <div className="text-[10px] uppercase text-[#6E6E6E] tracking-widest flex items-center justify-between">
                  <span>Document Frame</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#68715F]" />
                </div>
                <div className="space-y-1.5 py-2">
                  <div className="h-2 w-3/4 bg-white/15 rounded-xs" />
                  <div className="h-2 w-1/2 bg-white/10 rounded-xs" />
                  <div className="h-4 w-full bg-[#68715F]/20 border border-[#68715F]/40 rounded-xs flex items-center px-2 text-[9px] text-[#C8D1BE]">
                    Rendered in 12ms
                  </div>
                </div>
                <div className="text-[9px] text-[#6E6E6E]">DOM Tree Clean</div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-[#6E6E6E] border-t border-white/10 pt-3">
              <span className="tracking-widest uppercase">JavaScript / HTML5 / CSS3</span>
              <span className="text-[#E0DFDA]/70 font-sans text-xs tracking-tight">Zero-server client evaluation</span>
            </div>
          </div>
        );

      case 'hardware-sensor':
        return (
          <div className="w-full h-full bg-[#131714] text-[#C8D1BE] font-mono-meta flex flex-col justify-between p-5 sm:p-7 select-none relative overflow-hidden">
            {/* Engineering schematic grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E261F_1px,transparent_1px),linear-gradient(to_bottom,#1E261F_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-60" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#2A372C] pb-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#68715F]" />
                <span className="text-xs uppercase tracking-widest text-[#E0DFDA]">
                  Arduino UNO • Ultrasonic Proximity Radar
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-[#68715F]/20 border border-[#68715F]/40 text-[#C8D1BE] rounded-xs uppercase tracking-wider">
                Wokwi Simulation
              </span>
            </div>

            {/* Central Hardware Diagram */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 my-auto py-2 items-center">
              {/* Ultrasonic Wave Emitter Diagram */}
              <div className="md:col-span-6 flex flex-col items-center justify-center p-4 bg-[#0D100E] border border-[#2A372C] rounded-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#68715F] flex items-center justify-center text-[10px] text-[#A5C28F] font-bold">
                    TX
                  </div>
                  <div className="space-y-1">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#68715F] to-transparent animate-pulse" />
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#68715F] to-transparent animate-pulse delay-75" />
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#68715F] to-transparent animate-pulse delay-150" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#68715F]/60 flex items-center justify-center text-[10px] text-[#A5C28F] font-bold">
                    RX
                  </div>
                </div>
                <span className="text-[10px] tracking-widest text-[#8E8D88] uppercase">
                  HC-SR04 • 40kHz Ultrasonic Burst
                </span>
              </div>

              {/* SSD1306 Monochrome OLED Screen Preview */}
              <div className="md:col-span-6 p-4 bg-[#090C0A] border-2 border-[#1E261F] shadow-inner rounded-xs">
                <div className="border border-[#68715F]/40 p-3 bg-black space-y-2 text-cyan-200">
                  <div className="flex justify-between items-center text-[9px] text-[#8E8D88] border-b border-[#68715F]/20 pb-1">
                    <span>SSD1306 128x64</span>
                    <span>I2C 0x3C</span>
                  </div>
                  <div className="text-center py-1">
                    <div className="text-[10px] text-[#A5C28F] uppercase tracking-widest">DISTANCE READING</div>
                    <div className="text-2xl font-light text-[#F5F4F0] tracking-tight">18.4 cm</div>
                  </div>
                  <div className="w-full bg-[#1A231C] h-2 rounded-xs overflow-hidden">
                    <div className="w-3/4 h-full bg-[#68715F]" />
                  </div>
                  <div className="flex justify-between text-[9px] text-[#A5C28F]">
                    <span>CLEARANCE: SAFE</span>
                    <span>DELAY: 25ms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-[#8E8D88] border-t border-[#2A372C] pt-3">
              <span>PINOUT: TRIG D9 / ECHO D10 / SDA A4 / SCL A5</span>
              <span className="text-[#C8D1BE]">Calculated via pulseIn()</span>
            </div>
          </div>
        );

      case 'speech-to-text':
        return (
          <div className="w-full h-full bg-[#171716] text-[#E0DFDA] font-mono-meta flex flex-col justify-between p-5 sm:p-7 select-none relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#68715F]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-[#E56B55]" />
                <span className="text-xs uppercase tracking-widest text-[#F5F4F0]">
                  Web Speech Recognition API
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E56B55] animate-ping" />
                <span className="text-[10px] text-[#E56B55] tracking-widest uppercase">Listening</span>
              </div>
            </div>

            {/* Waveform & Speech Tokens */}
            <div className="relative z-10 my-auto py-3 space-y-4">
              {/* Waveform Bars */}
              <div className="flex items-center justify-center gap-1.5 h-14 px-4 bg-black/40 border border-white/5 rounded-xs">
                {[20, 35, 60, 85, 45, 95, 70, 40, 65, 80, 50, 90, 75, 30, 85, 60, 40, 70, 55, 30, 45, 60, 30].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="w-1.5 bg-[#68715F] rounded-full transition-all duration-300 opacity-80"
                  />
                ))}
              </div>

              {/* Recognized Tokens Stream */}
              <div className="p-4 bg-[#111111] border border-white/10 rounded-xs space-y-2">
                <div className="text-[10px] text-[#8E8D88] uppercase tracking-wider flex justify-between">
                  <span>Stream Buffer</span>
                  <span>Confidence: 0.98</span>
                </div>
                <p className="text-sm font-sans text-[#F5F4F0] leading-relaxed">
                  &ldquo;Converting spoken audio streams into structured text directly in the browser with zero external latency.&rdquo;
                  <span className="inline-block w-1.5 h-4 bg-[#68715F] ml-1 align-middle animate-pulse" />
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-[#8E8D88] border-t border-white/10 pt-3">
              <span>Continuous Dictation • Interim Result Parsing</span>
              <span className="text-[#C8D1BE]">Native Browser Engine</span>
            </div>
          </div>
        );

      case '3d-game':
        return (
          <div className="w-full h-full bg-[#121214] text-[#E0DFDA] font-mono-meta flex flex-col justify-between p-5 sm:p-7 select-none relative overflow-hidden">
            {/* 3D Wireframe Grid Floor Horizon */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#1E232A,transparent_70%)] pointer-events-none" />
            
            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-[#68715F]" />
                <span className="text-xs uppercase tracking-widest text-[#F5F4F0]">
                  3D Interactive Racing Engine
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#F2BD38] uppercase tracking-widest rounded-xs">
                60 FPS • Canvas 3D
              </span>
            </div>

            {/* Visual Vector Road Perspective */}
            <div className="relative z-10 my-auto py-2 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm h-28 border border-white/10 bg-black/60 overflow-hidden flex flex-col items-center justify-end rounded-xs">
                {/* Perspective Horizon */}
                <div className="absolute top-6 left-0 right-0 h-px bg-white/20" />
                
                {/* Road vanishing perspective lines */}
                <div className="w-4 h-full border-x border-dashed border-[#F2BD38]/80" />
                <div className="absolute inset-0 flex justify-between px-16 pointer-events-none">
                  <div className="w-px h-full bg-white/20 rotate-[-25deg] origin-top" />
                  <div className="w-px h-full bg-white/20 rotate-[25deg] origin-top" />
                </div>

                {/* Minimalist 3D Car Vector wireframe */}
                <div className="relative z-10 mb-2 px-6 py-2 bg-[#68715F] text-[#F5F4F0] border border-white/40 text-[10px] font-bold tracking-widest rounded-xs shadow-lg">
                  ▲ CAR_01 [SPEED: 142]
                </div>
              </div>
            </div>

            {/* Bottom HUD */}
            <div className="relative z-10 grid grid-cols-3 text-[11px] text-[#8E8D88] border-t border-white/10 pt-3">
              <div>AXIS: X: 0.00 / Y: 1.40</div>
              <div className="text-center text-[#C8D1BE]">COLLISION: BOUNDING BOX</div>
              <div className="text-right">STEERING: KEYBOARD / ARROWS</div>
            </div>
          </div>
        );

      case 'image-resizer':
        return (
          <div className="w-full h-full bg-[#181817] text-[#E0DFDA] font-mono-meta flex flex-col justify-between p-5 sm:p-7 select-none relative overflow-hidden">
            {/* Background alignment guides */}
            <div className="absolute inset-0 bg-[radial-gradient(#2E2E2C_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Crop className="w-4 h-4 text-[#68715F]" />
                <span className="text-xs uppercase tracking-widest text-[#F5F4F0]">
                  Client-Side Image Matrix
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#C8D1BE] rounded-xs uppercase tracking-wider">
                100% Private (No Upload)
              </span>
            </div>

            {/* Dimensional Viewport */}
            <div className="relative z-10 my-auto py-3 flex items-center justify-center">
              <div className="relative border-2 border-dashed border-[#68715F] p-4 bg-black/40 rounded-xs flex flex-col items-center justify-center min-w-[240px]">
                {/* Corner crosshairs */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#F5F4F0] border border-black" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#F5F4F0] border border-black" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#F5F4F0] border border-black" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#F5F4F0] border border-black" />

                <div className="text-center space-y-1">
                  <div className="text-xs text-[#F5F4F0] font-bold">1920 × 1080 px → 800 × 450 px</div>
                  <div className="text-[10px] text-[#A5C28F]">Aspect Ratio Locked (16:9)</div>
                  <div className="text-[9px] text-[#8E8D88]">Canvas2D toBlob() Export</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-[#8E8D88] border-t border-white/10 pt-3">
              <span>PNG / JPEG / WebP Engine</span>
              <span className="text-[#C8D1BE]">Zero Server Footprint</span>
            </div>
          </div>
        );

      case 'hardware-experiments':
      default:
        return (
          <div className="w-full h-full bg-[#151715] text-[#C8D1BE] font-mono-meta flex flex-col justify-between p-5 sm:p-7 select-none relative overflow-hidden">
            {/* Circuit layout backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(#243326_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-50" />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#2A372C] pb-3">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#68715F]" />
                <span className="text-xs uppercase tracking-widest text-[#F5F4F0]">
                  Embedded Series & Microcontrollers
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-[#68715F]/20 border border-[#68715F]/40 text-[#C8D1BE] rounded-xs uppercase tracking-wider">
                5 Lab Modules
              </span>
            </div>

            {/* Multi-experiment cluster chips */}
            <div className="relative z-10 my-auto py-2 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              <div className="p-2.5 bg-black/60 border border-[#2A372C] rounded-xs">
                <div className="text-[10px] text-[#68715F] font-bold">01 / JOYSTICK</div>
                <div className="text-[11px] text-[#E0DFDA] truncate">joystick_mega.it</div>
                <div className="text-[9px] text-[#8E8D88]">Dual-axis analog mapping</div>
              </div>
              <div className="p-2.5 bg-black/60 border border-[#2A372C] rounded-xs">
                <div className="text-[10px] text-[#68715F] font-bold">02 / OLED DISPLAY</div>
                <div className="text-[11px] text-[#E0DFDA] truncate">oled_animations</div>
                <div className="text-[9px] text-[#8E8D88]">SSD1306 bitmap frames</div>
              </div>
              <div className="p-2.5 bg-black/60 border border-[#2A372C] rounded-xs">
                <div className="text-[10px] text-[#68715F] font-bold">03 / SERVO MOTOR</div>
                <div className="text-[11px] text-[#E0DFDA] truncate">servo_1.o</div>
                <div className="text-[9px] text-[#8E8D88]">PWM angle positioning</div>
              </div>
              <div className="p-2.5 bg-black/60 border border-[#2A372C] rounded-xs">
                <div className="text-[10px] text-[#68715F] font-bold">04 / VOLTAGE SENSE</div>
                <div className="text-[11px] text-[#E0DFDA] truncate">Battery_Detector</div>
                <div className="text-[9px] text-[#8E8D88]">ADC voltage divider</div>
              </div>
              <div className="p-2.5 bg-black/60 border border-[#2A372C] rounded-xs col-span-2 sm:col-span-2">
                <div className="text-[10px] text-[#68715F] font-bold">05 / ROBOTICS CHASSIS</div>
                <div className="text-[11px] text-[#E0DFDA] truncate">range_rover_1.o</div>
                <div className="text-[9px] text-[#8E8D88]">Dual DC motor steering & driver logic</div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-[#8E8D88] border-t border-[#2A372C] pt-3">
              <span>AVR Architecture • C / C++ Toolchain</span>
              <span className="text-[#C8D1BE]">Breadboard & Virtual Wokwi</span>
            </div>
          </div>
        );
    }
  }, [project.visualType]);

  return (
    <div className={`relative w-full ${aspectClass} overflow-hidden rounded-xs border border-[#D8D7D2] transition-transform duration-700 ease-out group-hover:scale-[1.02]`}>
      {visual}
    </div>
  );
}
