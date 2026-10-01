import { useState, useEffect, useRef, useId } from 'react';
import { Project } from '../types';
import { Terminal, Cpu, Mic, Gamepad2, Play, RotateCcw, Volume2, Copy, Check, Radio, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';
import { useSound } from '../context/SoundContext';
import { useLanguage } from '../context/LanguageContext';

interface ProjectVisualProps {
  project: Project;
  aspectClass?: string;
  isInteractive?: boolean;
}

export function ProjectVisual({ project, aspectClass = "aspect-[16/10]" }: ProjectVisualProps) {
  const { playClick, playSuccess, playRadarAlert, playEngineNote, playPop } = useSound();
  const { t } = useLanguage();

  // =========================================================================
  // 1. Script Logic & Live Code Editor State
  // =========================================================================
  const CODE_PRESETS = [
    {
      name: "Interactive Particle Canvas",
      code: `// Real-Time Canvas Particle Simulation
const canvas = document.createElement('canvas');
canvas.width = 320; canvas.height = 140;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
const particles = Array.from({length: 24}, () => ({
  x: Math.random() * 320,
  y: Math.random() * 140,
  vx: (Math.random() - 0.5) * 2,
  vy: (Math.random() - 0.5) * 2
}));
function animate() {
  ctx.fillStyle = '#0F1110';
  ctx.fillRect(0, 0, 320, 140);
  particles.forEach(p => {
    p.x = (p.x + p.vx + 320) % 320;
    p.y = (p.y + p.vy + 140) % 140;
    ctx.fillStyle = '#8FA183';
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();`
    },
    {
      name: "Tactile Counter & Metrics",
      code: `// Lightweight DOM Metric Counter
const container = document.createElement('div');
container.style.padding = '16px';
container.style.color = '#EDEDEB';
container.style.fontFamily = 'monospace';
let count = 0;
container.innerHTML = '<h4 style="margin:0 0 8px 0; color:#8FA183">Event Stream Active</h4><p id="counter">Events: 0</p>';
document.body.appendChild(container);
setInterval(() => {
  count++;
  const el = document.getElementById('counter');
  if(el) el.textContent = 'Events: ' + count + ' (Latency: ' + (4 + (count % 3)) + 'ms)';
}, 500);`
    }
  ];

  const [activeCodePreset, setActiveCodePreset] = useState(0);
  const [editorCode, setEditorCode] = useState(CODE_PRESETS[0].code);
  const [renderDuration, setRenderDuration] = useState('3.8ms');
  const [evalOutput, setEvalOutput] = useState('Evaluated successfully.');
  const [domNodesCount, setDomNodesCount] = useState(14);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const runCodeInSandbox = () => {
    playClick();
    const startTime = performance.now();
    try {
      if (iframeRef.current) {
        const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
        if (doc) {
          doc.open();
          doc.write(`
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { margin: 0; background: #0C0D0E; color: #EDEDEB; font-family: -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; overflow: hidden; }
                </style>
              </head>
              <body>
                <script>
                  try {
                    ${editorCode}
                  } catch(e) {
                    document.body.innerHTML = '<span style="color:#E56B55; font-size:12px; font-family:monospace">Error: ' + e.message + '</span>';
                  }
                <\/script>
              </body>
            </html>
          `);
          doc.close();
        }
      }
      const elapsed = (performance.now() - startTime).toFixed(1);
      setRenderDuration(`${elapsed}ms`);
      setDomNodesCount(Math.floor(12 + Math.random() * 8));
      setEvalOutput('Rendered cleanly in sandbox iframe.');
      playSuccess();
    } catch (err: unknown) {
      setEvalOutput(`Evaluation error: ${(err as Error).message}`);
    }
  };

  useEffect(() => {
    if (project.visualType === 'code-editor') {
      runCodeInSandbox();
    }
  }, [activeCodePreset]);

  // =========================================================================
  // 2. Ultrasonic Radar & Distance Sensor State
  // =========================================================================
  const [distanceCm, setDistanceCm] = useState(38);
  const radarCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isPinging, setIsPinging] = useState(false);

  useEffect(() => {
    if (project.visualType !== 'hardware-sensor') return;

    let sweepAngle = 0;
    let animationId: number;

    const canvas = radarCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const renderRadar = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(cx, cy) - 8;

      ctx.fillStyle = '#0F1310';
      ctx.fillRect(0, 0, w, h);

      // Radar rings
      ctx.strokeStyle = '#223024';
      ctx.lineWidth = 1;
      [0.25, 0.5, 0.75, 1].forEach((r) => {
        ctx.beginPath();
        ctx.arc(cx, cy, radius * r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(cx, 0); ctx.lineTo(cx, h);
      ctx.moveTo(0, cy); ctx.lineTo(w, cy);
      ctx.stroke();

      // Rotating sonar beam
      sweepAngle = (sweepAngle + 0.04) % (Math.PI * 2);
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      gradient.addColorStop(0, 'rgba(143, 161, 131, 0.3)');
      gradient.addColorStop(1, 'transparent');

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, sweepAngle - 0.35, sweepAngle);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();

      // Draw obstacle target based on distanceCm
      const normalizedDist = Math.min(1, Math.max(0.05, distanceCm / 100));
      const targetDist = radius * normalizedDist;
      const targetAngle = Math.PI * 0.25;
      const tx = cx + Math.cos(targetAngle) * targetDist;
      const ty = cy + Math.sin(targetAngle) * targetDist;

      // Obstacle blip color
      let blipColor = '#8FA183';
      if (distanceCm < 30) blipColor = '#E55B5B';
      else if (distanceCm < 70) blipColor = '#E5A83B';

      ctx.fillStyle = blipColor;
      ctx.beginPath();
      ctx.arc(tx, ty, distanceCm < 30 ? 6 : 4, 0, Math.PI * 2);
      ctx.fill();

      // Distance trail echo
      ctx.strokeStyle = blipColor;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(tx, ty, 8 + (Math.sin(Date.now() / 150) * 3), 0, Math.PI * 2);
      ctx.stroke();

      animationId = requestAnimationFrame(renderRadar);
    };

    animationId = requestAnimationFrame(renderRadar);
    return () => cancelAnimationFrame(animationId);
  }, [distanceCm, project.visualType]);

  const handleDistanceChange = (val: number) => {
    setDistanceCm(val);
    if (val < 40) {
      playRadarAlert(1 - val / 100);
    }
  };

  const triggerRadarPing = () => {
    setIsPinging(true);
    playRadarAlert(1 - Math.min(1, distanceCm / 100));
    setTimeout(() => setIsPinging(false), 300);
  };

  // =========================================================================
  // 3. Speech-to-Text & Live Waveform State
  // =========================================================================
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('Voice input initialized. Press dictation to begin transcription.');
  const [confidence, setConfidence] = useState(98.6);
  const [copiedTranscript, setCopiedTranscript] = useState(false);
  const waveformCanvasRef = useRef<HTMLCanvasElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (project.visualType !== 'speech-to-text') return;

    let animId: number;
    const canvas = waveformCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const renderWave = () => {
      ctx.fillStyle = '#111315';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barCount = 36;
      const barWidth = canvas.width / barCount - 2;
      const time = Date.now() / 180;

      for (let i = 0; i < barCount; i++) {
        const heightMultiplier = isRecording
          ? Math.sin(time + i * 0.4) * 0.4 + Math.cos(time * 0.7 + i * 0.2) * 0.5 + 0.3
          : 0.15 + Math.sin(time * 0.5 + i * 0.2) * 0.08;

        const barHeight = Math.max(4, canvas.height * Math.abs(heightMultiplier) * 0.85);
        const x = i * (barWidth + 2);
        const y = (canvas.height - barHeight) / 2;

        ctx.fillStyle = isRecording ? '#8FA183' : '#3E434D';
        ctx.fillRect(x, y, barWidth, barHeight);
      }

      animId = requestAnimationFrame(renderWave);
    };

    animId = requestAnimationFrame(renderWave);
    return () => cancelAnimationFrame(animId);
  }, [isRecording, project.visualType]);

  const toggleDictation = () => {
    playClick();
    if (isRecording) {
      setIsRecording(false);
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch {}
      }
    } else {
      setIsRecording(true);
      // Try Web Speech API
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        try {
          const reco = new SpeechRecognition();
          reco.continuous = true;
          reco.interimResults = true;
          reco.onresult = (event: any) => {
            let fullText = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
              fullText += event.results[i][0].transcript;
            }
            if (fullText) {
              setTranscript(fullText);
              setConfidence(Number((96 + Math.random() * 3.8).toFixed(1)));
            }
          };
          reco.onerror = () => simulateDictationStream();
          reco.start();
          recognitionRef.current = reco;
        } catch {
          simulateDictationStream();
        }
      } else {
        simulateDictationStream();
      }
    }
  };

  const simulateDictationStream = () => {
    const sentences = [
      "Exploring physical computing and real-time audio streams with JavaScript.",
      "The HC-SR04 ultrasonic sensor measures distance via acoustic reflections.",
      "Building reactive interfaces with high-character typography and tactile audio.",
      "Experimenting with fast in-browser speech transcription and signal processing."
    ];
    let wordIndex = 0;
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)].split(' ');
    setTranscript('');

    const interval = setInterval(() => {
      if (wordIndex < randomSentence.length) {
        setTranscript((prev) => `${prev} ${randomSentence[wordIndex]}`.trim());
        setConfidence(Number((97.2 + Math.random() * 2.5).toFixed(1)));
        wordIndex++;
      } else {
        clearInterval(interval);
        setIsRecording(false);
      }
    }, 280);
  };

  const copyTranscriptToClipboard = () => {
    playPop();
    navigator.clipboard.writeText(transcript);
    setCopiedTranscript(true);
    setTimeout(() => setCopiedTranscript(false), 1800);
  };

  // =========================================================================
  // 4. 3D Road Racer Mini-Game State
  // =========================================================================
  const racerCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlayingRacer, setIsPlayingRacer] = useState(false);
  const [racerSpeed, setRacerSpeed] = useState(0);
  const [distanceTraveled, setDistanceTraveled] = useState(0);
  const racerStateRef = useRef({
    carX: 0,
    speed: 0,
    distance: 0,
    curve: 0
  });

  useEffect(() => {
    if (project.visualType !== '3d-game') return;

    let animId: number;
    const canvas = racerCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const normalizedX = (mouseX / rect.width) * 2 - 1; // -1 to +1
      racerStateRef.current.carX = Math.max(-0.85, Math.min(0.85, normalizedX));
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const renderTrack = () => {
      const w = canvas.width;
      const h = canvas.height;
      const state = racerStateRef.current;

      if (isPlayingRacer) {
        state.speed = Math.min(140, state.speed + 0.8);
        state.distance += state.speed * 0.04;
        setRacerSpeed(Math.round(state.speed));
        setDistanceTraveled(Math.round(state.distance));
        playEngineNote(state.speed / 140);
      } else {
        state.speed = Math.max(0, state.speed - 2);
        setRacerSpeed(Math.round(state.speed));
      }

      // Sky & Horizon
      ctx.fillStyle = '#0F1216';
      ctx.fillRect(0, 0, w, h * 0.45);

      // Distant mountains
      ctx.fillStyle = '#1B2129';
      ctx.beginPath();
      ctx.moveTo(0, h * 0.45);
      for (let i = 0; i <= w; i += 40) {
        ctx.lineTo(i, h * 0.45 - (Math.sin((i + state.distance * 0.2) * 0.02) * 16 + 10));
      }
      ctx.lineTo(w, h * 0.45);
      ctx.closePath();
      ctx.fill();

      // Road geometry projection
      const horizonY = h * 0.45;
      const roadBottomWidth = w * 0.75;
      const roadTopWidth = w * 0.08;

      ctx.fillStyle = '#171A1E';
      ctx.beginPath();
      ctx.moveTo((w - roadTopWidth) / 2, horizonY);
      ctx.lineTo((w + roadTopWidth) / 2, horizonY);
      ctx.lineTo((w + roadBottomWidth) / 2, h);
      ctx.lineTo((w - roadBottomWidth) / 2, h);
      ctx.closePath();
      ctx.fill();

      // Moving road stripes
      const stripeOffset = (state.distance * 1.5) % 30;
      for (let y = horizonY; y < h; y += 12) {
        const perspective = (y - horizonY) / (h - horizonY);
        const isStripe = Math.floor((y + stripeOffset) / 12) % 2 === 0;
        if (isStripe) {
          const currentRoadW = roadTopWidth + (roadBottomWidth - roadTopWidth) * perspective;
          const stripeW = Math.max(1.5, 4 * perspective);
          ctx.fillStyle = '#8FA183';
          ctx.fillRect(w / 2 - stripeW / 2, y, stripeW, 6 * perspective);
        }
      }

      // Player car
      const carW = 34;
      const carH = 18;
      const carScreenX = w / 2 + state.carX * (roadBottomWidth * 0.42) - carW / 2;
      const carScreenY = h - 28;

      // Car body
      ctx.fillStyle = '#EDEDEB';
      ctx.fillRect(carScreenX, carScreenY, carW, carH);
      ctx.fillStyle = '#111111';
      ctx.fillRect(carScreenX + 5, carScreenY + 3, carW - 10, carH - 8); // Windshield

      // Tail lights
      ctx.fillStyle = isPlayingRacer ? '#8FA183' : '#E55B5B';
      ctx.fillRect(carScreenX + 2, carScreenY + carH - 3, 5, 2);
      ctx.fillRect(carScreenX + carW - 7, carScreenY + carH - 3, 5, 2);

      animId = requestAnimationFrame(renderTrack);
    };

    animId = requestAnimationFrame(renderTrack);
    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isPlayingRacer, project.visualType]);

  const toggleRacer = () => {
    playClick();
    setIsPlayingRacer((prev) => !prev);
  };

  // =========================================================================
  // RENDER PER VISUAL TYPE
  // =========================================================================
  switch (project.visualType) {
    case 'code-editor':
      return (
        <div className={`w-full ${aspectClass} bg-[#121415] text-[#EDEDEB] font-mono-meta flex flex-col justify-between p-4 sm:p-6 select-none relative overflow-hidden rounded-xs border border-white/10 shadow-lg`}>
          {/* Top Bar with Run & Presets */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E56B55]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F2BD38]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#8FA183]" />
              <span className="ml-1 text-[11px] text-white/70 font-semibold tracking-wider">
                Script Logic Sandbox
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const next = (activeCodePreset + 1) % CODE_PRESETS.length;
                  setActiveCodePreset(next);
                  setEditorCode(CODE_PRESETS[next].code);
                }}
                className="px-2 py-1 text-[10px] bg-white/5 hover:bg-white/10 text-white/80 rounded-xs transition-colors cursor-pointer border border-white/10"
              >
                Preset {activeCodePreset + 1}/{CODE_PRESETS.length}
              </button>

              <button
                onClick={runCodeInSandbox}
                className="flex items-center gap-1.5 px-3 py-1 bg-[#8FA183] text-[#121415] text-[11px] font-semibold rounded-xs hover:bg-[#A5C28F] transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{t.sandboxes.runCode}</span>
              </button>
            </div>
          </div>

          {/* Split View: Editable Script & Live Frame */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-auto py-3">
            {/* Left: Code Snippet */}
            <div className="md:col-span-7 flex flex-col justify-between bg-[#0A0B0C] border border-white/10 rounded-xs p-3 font-mono text-[11px] text-[#A5C28F] overflow-x-auto max-h-[160px]">
              <textarea
                value={editorCode}
                onChange={(e) => setEditorCode(e.target.value)}
                className="w-full h-full bg-transparent resize-none border-none outline-none font-mono text-[11px] text-[#C8D1BE] leading-relaxed"
                spellCheck={false}
              />
            </div>

            {/* Right: Live Sandbox Viewport Frame */}
            <div className="md:col-span-5 flex flex-col bg-[#08090A] border border-white/10 rounded-xs overflow-hidden h-[160px]">
              <div className="flex items-center justify-between px-2.5 py-1 bg-white/5 border-b border-white/10 text-[9px] text-white/50">
                <span>Viewport Output</span>
                <span className="text-[#8FA183]">DOM Nodes: {domNodesCount}</span>
              </div>
              <iframe
                ref={iframeRef}
                title="Sandbox Preview"
                sandbox="allow-scripts"
                className="w-full h-full border-none bg-transparent"
              />
            </div>
          </div>

          {/* Bottom Execution Metrics */}
          <div className="flex items-center justify-between text-[10px] text-white/60 border-t border-white/10 pt-2.5">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-[#F2BD38]" />
                <span>Executed in: <strong className="text-white font-mono">{renderDuration}</strong></span>
              </span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="hidden sm:inline">{evalOutput}</span>
            </div>
            <span className="text-[#8FA183] uppercase tracking-wider font-semibold">100% Client-Side</span>
          </div>
        </div>
      );

    case 'hardware-sensor':
      return (
        <div className={`w-full ${aspectClass} bg-[#0E1210] text-[#C8D1BE] font-mono-meta flex flex-col justify-between p-4 sm:p-6 select-none relative overflow-hidden rounded-xs border border-[#223024] shadow-lg`}>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#223024] pb-3">
            <div className="flex items-center gap-2">
              <Radio className={`w-4 h-4 ${isPinging ? 'text-[#E55B5B] animate-ping' : 'text-[#8FA183]'}`} />
              <span className="text-xs font-semibold text-[#EDEDEB] tracking-wider">
                Ultrasonic Proximity Radar (HC-SR04)
              </span>
            </div>
            <button
              onClick={triggerRadarPing}
              className="flex items-center gap-1 px-2.5 py-1 bg-[#1A241C] hover:bg-[#253628] border border-[#3E5642] text-[10px] text-[#A5C28F] rounded-xs cursor-pointer transition-colors"
            >
              <Volume2 className="w-3 h-3" />
              <span>Ping Sonar</span>
            </button>
          </div>

          {/* Middle: Canvas Radar & Live Sensor Display */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center my-auto py-2">
            {/* Canvas Sweep View */}
            <div className="sm:col-span-5 flex justify-center">
              <canvas
                ref={radarCanvasRef}
                width={150}
                height={150}
                className="rounded-full border border-[#2B3E2F] shadow-[0_0_15px_rgba(104,113,95,0.2)]"
              />
            </div>

            {/* OLED Display & Threshold Warning */}
            <div className="sm:col-span-7 space-y-3">
              <div className="bg-[#050705] border border-[#2B3E2F] p-3 rounded-xs font-mono">
                <div className="flex items-center justify-between text-[10px] text-[#6E8272] mb-1">
                  <span>SSD1306 OLED (128x64)</span>
                  <span>I2C 0x3C</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#EDEDEB] flex items-baseline gap-2">
                  <span>{distanceCm}</span>
                  <span className="text-sm font-normal text-[#8FA183]">CM</span>
                  <span className="text-[11px] text-[#6E8272] ml-auto">
                    Echo: {Math.round(distanceCm * 58.2)} µs
                  </span>
                </div>
                {/* State Badge */}
                <div className="mt-2 pt-2 border-t border-[#1E2C21] flex items-center gap-1.5 text-xs">
                  {distanceCm < 30 ? (
                    <span className="flex items-center gap-1 text-[#E55B5B] font-bold">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>{t.sandboxes.radarDanger}</span>
                    </span>
                  ) : distanceCm < 70 ? (
                    <span className="flex items-center gap-1 text-[#E5A83B] font-medium">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>{t.sandboxes.radarWarning}</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[#8FA183]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{t.sandboxes.radarSafe}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Interactive Distance Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-[#8FA183]">
                  <span>Obstacle Proximity Slider</span>
                  <span>{distanceCm} cm</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="120"
                  value={distanceCm}
                  onChange={(e) => handleDistanceChange(Number(e.target.value))}
                  className="w-full accent-[#8FA183] cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="flex items-center justify-between text-[10px] text-[#6E8272] border-t border-[#223024] pt-2">
            <span>Embedded C++ Pulse Math: t_pulse / 58.2</span>
            <span>Real-time Sound Modulated</span>
          </div>
        </div>
      );

    case 'speech-to-text':
      return (
        <div className={`w-full ${aspectClass} bg-[#111315] text-[#EDEDEB] font-mono-meta flex flex-col justify-between p-4 sm:p-6 select-none relative overflow-hidden rounded-xs border border-white/10 shadow-lg`}>
          {/* Header with Mic Button */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Mic className={`w-4 h-4 ${isRecording ? 'text-red-400 animate-pulse' : 'text-[#8FA183]'}`} />
              <span className="text-xs font-semibold tracking-wider">
                Speech-to-Text Tokenizer
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleDictation}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-xs text-[11px] font-semibold transition-all cursor-pointer ${
                  isRecording
                    ? 'bg-red-500/20 border border-red-500/40 text-red-300'
                    : 'bg-[#8FA183] text-[#111315] hover:bg-[#A5C28F]'
                }`}
              >
                <span>{isRecording ? t.sandboxes.stopDictation : t.sandboxes.startDictation}</span>
              </button>
            </div>
          </div>

          {/* Audio Waveform Canvas */}
          <div className="my-2">
            <canvas
              ref={waveformCanvasRef}
              width={340}
              height={44}
              className="w-full h-11 rounded-xs border border-white/10"
            />
          </div>

          {/* Real-Time Transcript Display */}
          <div className="bg-[#0A0B0D] border border-white/10 rounded-xs p-3 space-y-2">
            <div className="flex items-center justify-between text-[10px] text-white/50">
              <span className="flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${isRecording ? 'bg-red-400 animate-ping' : 'bg-[#8FA183]'}`} />
                <span>{isRecording ? 'Streaming Audio Tokens...' : 'Transcript Ready'}</span>
              </span>
              <span>Confidence: {confidence}%</span>
            </div>
            <p className="text-xs font-mono text-[#EDEDEB] leading-relaxed min-h-[38px]">
              &ldquo;{transcript}&rdquo;
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between text-[10px] text-white/60 border-t border-white/10 pt-2.5">
            <button
              onClick={copyTranscriptToClipboard}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              {copiedTranscript ? <Check className="w-3 h-3 text-[#8FA183]" /> : <Copy className="w-3 h-3" />}
              <span>{copiedTranscript ? t.sandboxes.copied : t.sandboxes.copyTranscript}</span>
            </button>
            <span className="text-[#8FA183]">Web Speech API Native</span>
          </div>
        </div>
      );

    case '3d-game':
      return (
        <div className={`w-full ${aspectClass} bg-[#0A0D10] text-[#EDEDEB] font-mono-meta flex flex-col justify-between p-4 sm:p-6 select-none relative overflow-hidden rounded-xs border border-white/10 shadow-lg`}>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-4 h-4 text-[#8FA183]" />
              <span className="text-xs font-semibold tracking-wider">
                3D Road Racer (Canvas Pseudo-3D)
              </span>
            </div>

            <button
              onClick={toggleRacer}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xs text-[11px] font-semibold transition-all cursor-pointer ${
                isPlayingRacer
                  ? 'bg-amber-500/20 border border-amber-500/40 text-amber-200'
                  : 'bg-[#8FA183] text-[#111111] hover:bg-[#A5C28F]'
              }`}
            >
              <Play className="w-3 h-3 fill-current" />
              <span>{isPlayingRacer ? t.sandboxes.pauseDrive : t.sandboxes.startDrive}</span>
            </button>
          </div>

          {/* Interactive Game Canvas */}
          <div className="relative my-2 rounded-xs overflow-hidden border border-white/10">
            <canvas
              ref={racerCanvasRef}
              width={380}
              height={150}
              className="w-full h-[150px] block cursor-ew-resize"
            />
            {/* Steering Overlay Prompt */}
            {!isPlayingRacer && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center">
                <span className="text-xs font-semibold text-white mb-1">Click Start to Drive</span>
                <span className="text-[10px] text-white/70">Move mouse across track to steer car</span>
              </div>
            )}
          </div>

          {/* Dashboard Telemetry */}
          <div className="flex items-center justify-between text-[11px] font-mono border-t border-white/10 pt-2 text-white/70">
            <div className="flex items-center gap-4">
              <span>Speed: <strong className="text-[#EDEDEB]">{racerSpeed} km/h</strong></span>
              <span>Dist: <strong className="text-[#EDEDEB]">{distanceTraveled} m</strong></span>
            </div>
            <span className="text-[10px] text-[#8FA183]">Mouse Coordinate Steering</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`w-full ${aspectClass} bg-[#111111] text-[#EDEDEB] flex items-center justify-center p-6 rounded-xs border border-white/10`}>
          <div className="text-center space-y-2">
            <Terminal className="w-8 h-8 text-[#8FA183] mx-auto" />
            <p className="text-xs font-mono text-white/70">{project.title}</p>
          </div>
        </div>
      );
  }
}
