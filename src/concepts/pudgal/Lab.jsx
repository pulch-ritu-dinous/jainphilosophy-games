import { useState } from 'react';
import LabEmbedded from '../../components/lab/LabEmbedded';
import {
  LAB_MODULES,
  GUNAS_DATA,
  PARAMANU_COMBINATIONS,
  BOTANICAL_EXAMPLES,
  SHVETAMBARA_VIGAI_LIST
} from './data';

export default function Lab() {
  const [activeModule, setActiveModule] = useState('gunas');

  // Module 1: Four Gunas state
  const [selectedGuna, setSelectedGuna] = useState('varna');
  const [selectedVarna, setSelectedVarna] = useState('krishna');
  const [selectedRasa, setSelectedRasa] = useState('tikta');
  const [selectedGandha, setSelectedGandha] = useState('surabhi');
  const [selectedSparshaPair, setSelectedSparshaPair] = useState('thermal');

  // Module 2: Paramanu & Skandha state
  const [paramanuThermal, setParamanuThermal] = useState('shita');
  const [paramanuCohesive, setParamanuCohesive] = useState('snigdha');
  const [aggregationStep, setAggregationStep] = useState(1);

  // Module 3: Food & Restraint state
  const [dietarySubTab, setDietarySubTab] = useState('botanical');
  const [selectedBotanical, setSelectedBotanical] = useState('radish');
  const [activeVigais, setActiveVigais] = useState({
    dugdha: true,
    dadhi: true,
    ghrita: true,
    taila: true,
    guda: true,
    pakvanna: true
  });

  const activeParamanuCombo = PARAMANU_COMBINATIONS.find(
    (c) => c.thermal === paramanuThermal && c.cohesive === paramanuCohesive
  );

  const toggleVigai = (id) => {
    setActiveVigais((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentBotanicalItem = BOTANICAL_EXAMPLES.find((b) => b.id === selectedBotanical) || BOTANICAL_EXAMPLES[0];
  const activeVigaiCount = Object.values(activeVigais).filter(Boolean).length;

  return (
    <LabEmbedded title="Vicāra Maṇḍapa (विचार मण्डप) — The Pudgala Laboratory">
      {/* Top Module Navigation */}
      <nav aria-label="Laboratory Modules" className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {LAB_MODULES.map((mod) => {
          const isActive = activeModule === mod.id;
          return (
            <button
              key={mod.id}
              type="button"
              onClick={() => setActiveModule(mod.id)}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-amber-100/70 border-amber-500 shadow-sm text-stone-900 ring-1 ring-amber-500/40'
                  : 'bg-white/80 border-stone-200 hover:border-amber-300 text-stone-700 hover:bg-stone-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                  {mod.devanagari}
                </span>
                <span className="text-base text-amber-700">{mod.icon}</span>
              </div>
              <p className="mt-1 font-semibold text-base text-stone-900">{mod.title}</p>
              <p className="text-xs text-stone-600 mt-0.5">{mod.subtitle}</p>
            </button>
          );
        })}
      </nav>

      {/* MODULE 1: FOUR GUNAS INSPECTOR */}
      {activeModule === 'gunas' && (
        <section className="space-y-6 animate-fade">
          {/* Sub-navigation for the 4 Gunas */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-stone-100/90 rounded-2xl border border-stone-200">
            {Object.values(GUNAS_DATA).map((guna) => {
              const isSelected = selectedGuna === guna.id;
              return (
                <button
                  key={guna.id}
                  type="button"
                  onClick={() => setSelectedGuna(guna.id)}
                  className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl font-medium text-sm transition-all text-center cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 text-white shadow-sm'
                      : 'text-stone-700 hover:bg-white hover:text-stone-900'
                  }`}
                >
                  <span className="block text-xs opacity-75">{guna.devanagari}</span>
                  <span className="font-semibold">{guna.name}</span>
                </button>
              );
            })}
          </div>

          {/* Guna Overview Banner */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/60 pb-2 mb-2">
              <h3 className="text-lg font-semibold text-amber-900">
                {GUNAS_DATA[selectedGuna].name} ({GUNAS_DATA[selectedGuna].devanagari}) — {GUNAS_DATA[selectedGuna].english}
              </h3>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                {GUNAS_DATA[selectedGuna].sutra}
              </span>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed">
              {GUNAS_DATA[selectedGuna].description}
            </p>
          </div>

          {/* VARNA INSPECTOR */}
          {selectedGuna === 'varna' && (
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Five Canonical Colors (Pannavaṇā Sūtra Pada 17)
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {GUNAS_DATA.varna.subtypes.map((v) => {
                  const isSelected = selectedVarna === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVarna(v.id)}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'border-amber-600 ring-2 ring-amber-500/50 bg-amber-50/60'
                          : 'border-stone-200 bg-white hover:border-amber-300'
                      }`}
                    >
                      <div
                        className="w-12 h-12 mx-auto rounded-full border shadow-inner mb-2"
                        style={{ backgroundColor: v.hex, borderColor: v.borderHex }}
                      />
                      <p className="font-semibold text-sm text-stone-900">{v.name}</p>
                      <p className="text-xs text-stone-500">{v.devanagari}</p>
                      <p className="text-xs font-medium text-amber-800 mt-1">{v.english}</p>
                    </button>
                  );
                })}
              </div>

              {/* Selected Varna Detail Card */}
              {(() => {
                const item = GUNAS_DATA.varna.subtypes.find((v) => v.id === selectedVarna);
                if (!item) return null;
                return (
                  <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full border shadow-sm"
                        style={{ backgroundColor: item.hex, borderColor: item.borderHex }}
                      />
                      <div>
                        <h4 className="font-semibold text-base text-stone-900">
                          {item.name} ({item.devanagari}) — {item.english}
                        </h4>
                        <p className="text-xs text-stone-500">{item.canonicalNote}</p>
                      </div>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-700 leading-relaxed border border-stone-100">
                      <span className="font-semibold text-stone-900">Traditional Archetypes: </span>
                      {item.archetype}
                    </div>
                    <div className="text-xs text-amber-900/80 bg-amber-50/60 p-3 rounded-xl border border-amber-200/70">
                      <span className="font-semibold">Pariṇāma Context: </span>
                      All intermediate colors in physical objects (such as green, orange, or violet) arise as compound transformations of these five primal canonical hues in macroscopic aggregates.
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* RASA INSPECTOR */}
          {selectedGuna === 'rasa' && (
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Five Classical Tastes (Sarvārthasiddhi on TS 5.23)
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {GUNAS_DATA.rasa.subtypes.map((r) => {
                  const isSelected = selectedRasa === r.id;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setSelectedRasa(r.id)}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'border-amber-600 ring-2 ring-amber-500/50 bg-amber-50/60'
                          : 'border-stone-200 bg-white hover:border-amber-300'
                      }`}
                    >
                      <span className="text-xs text-amber-800 font-semibold">{r.devanagari}</span>
                      <p className="font-semibold text-sm text-stone-900 mt-1">{r.name}</p>
                      <p className="text-xs text-stone-600">{r.english}</p>
                    </button>
                  );
                })}
              </div>

              {/* Selected Rasa Detail Card */}
              {(() => {
                const item = GUNAS_DATA.rasa.subtypes.find((r) => r.id === selectedRasa);
                if (!item) return null;
                return (
                  <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-3">
                    <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                      <h4 className="font-semibold text-base text-stone-900">
                        {item.name} ({item.devanagari}) — {item.english}
                      </h4>
                      <span className="text-xs font-mono bg-stone-100 px-2 py-0.5 rounded text-stone-700">
                        {item.commentaryRef}
                      </span>
                    </div>
                    <p className="text-sm text-stone-700">{item.description}</p>
                    <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-700 border border-stone-100">
                      <span className="font-semibold text-stone-900">Traditional Archetypes: </span>
                      {item.archetype}
                    </div>
                  </div>
                );
              })()}

              {/* Doctrinal note on Salt (Lavana) */}
              <div className="rounded-xl border border-amber-300 bg-amber-50/70 p-3.5 text-xs text-amber-900 leading-relaxed">
                <span className="font-semibold">Doctrinal Note: </span>
                {GUNAS_DATA.rasa.lavanaNote}
              </div>
            </div>
          )}

          {/* GANDHA INSPECTOR */}
          {selectedGuna === 'gandha' && (
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Two Canonical Smells (Pannavaṇā Sūtra Pada 17; Sarvārthasiddhi 5.23)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {GUNAS_DATA.gandha.subtypes.map((g) => {
                  const isSelected = selectedGandha === g.id;
                  return (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setSelectedGandha(g.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-amber-600 ring-2 ring-amber-500/50 bg-amber-50/60'
                          : 'border-stone-200 bg-white hover:border-amber-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-amber-800">{g.devanagari}</span>
                        <span className="text-xs font-mono bg-stone-100 px-2 py-0.5 rounded text-stone-600">
                          {g.id === 'surabhi' ? 'Agreeable' : 'Disagreeable'}
                        </span>
                      </div>
                      <h4 className="font-semibold text-base text-stone-900 mt-1">{g.name}</h4>
                      <p className="text-xs text-stone-600 mt-0.5">{g.english}</p>
                      <p className="text-xs text-stone-700 mt-2 leading-relaxed">{g.description}</p>
                      <div className="mt-3 pt-2 border-t border-stone-100 text-xs text-stone-500">
                        <span className="font-medium text-stone-700">Archetypes: </span>
                        {g.archetype}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* SPARSHA INSPECTOR */}
          {selectedGuna === 'sparsha' && (
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Eight Touch Qualities in Four Functional Pairs (Tattvārtha Sūtra 5.23)
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {GUNAS_DATA.sparsha.pairs.map((pair) => {
                  const isSelected = selectedSparshaPair === pair.id;
                  return (
                    <button
                      key={pair.id}
                      type="button"
                      onClick={() => setSelectedSparshaPair(pair.id)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-amber-600 ring-2 ring-amber-500/50 bg-amber-50/70'
                          : 'border-stone-200 bg-white hover:border-amber-300'
                      }`}
                    >
                      <span className="text-xs text-amber-800 font-semibold">{pair.devanagari}</span>
                      <p className="font-semibold text-sm text-stone-900 mt-0.5">{pair.pairName}</p>
                      <p className="text-xs text-stone-500 mt-1">
                        {pair.items.map((i) => i.name).join(' • ')}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Selected Pair Breakdown */}
              {(() => {
                const pair = GUNAS_DATA.sparsha.pairs.find((p) => p.id === selectedSparshaPair);
                if (!pair) return null;
                return (
                  <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                      <div>
                        <h4 className="font-semibold text-base text-stone-900">
                          {pair.pairName} ({pair.devanagari})
                        </h4>
                        <p className="text-xs text-stone-500">{pair.category}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pair.items.map((item) => (
                        <div key={item.id} className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                          <div className="flex items-center justify-between">
                            <span className="text-base font-semibold text-stone-900">{item.name}</span>
                            <span className="text-xs font-semibold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
                              {item.devanagari}
                            </span>
                          </div>
                          <p className="text-xs font-medium text-stone-600 mt-0.5">{item.english}</p>
                          <p className="text-xs text-stone-700 mt-2 leading-relaxed">{item.nature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </section>
      )}

      {/* MODULE 2: PARAMANU & SKANDHA EXPLORATION */}
      {activeModule === 'paramanu-skandha' && (
        <section className="space-y-6 animate-fade">
          <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4">
            <h3 className="text-lg font-semibold text-amber-900">
              Paramāṇu & Skandha (परमाणु एवं स्कन्ध) — The Metaphysics of Form
            </h3>
            <p className="text-sm text-stone-700 mt-1 leading-relaxed">
              Jain philosophy conceptualizes physical reality across two fundamental states: the indivisible, single space-point <span className="font-semibold text-stone-900">Paramāṇu</span>, and the composite aggregate <span className="font-semibold text-stone-900">Skandha</span>.
            </p>
          </div>

          {/* Section A: The Four Two-Touch Combinations */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-base text-stone-900">
                  1. The Two-Touch Rule in a Single Paramāṇu (Pañcāstikāyasāra 81)
                </h4>
                <span className="text-xs font-mono bg-stone-100 px-2 py-0.5 rounded text-stone-700">
                  दोफासं (Do-phāsaṃ)
                </span>
              </div>
              <p className="text-xs text-stone-600 mt-1">
                An isolated Paramāṇu manifests strictly 1 color, 1 taste, 1 smell, and exactly 2 touches: one thermal and one cohesive. Select each to see the canonical combination:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Thermal Selection */}
              <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-600">
                  A. Select Thermal Touch (Śīta / Uṣṇa)
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setParamanuThermal('shita')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      paramanuThermal === 'shita'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    Śīta (शीत - Cold)
                  </button>
                  <button
                    type="button"
                    onClick={() => setParamanuThermal('ushna')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      paramanuThermal === 'ushna'
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    Uṣṇa (उष्ण - Hot)
                  </button>
                </div>
              </div>

              {/* Cohesive Selection */}
              <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-600">
                  B. Select Cohesive Touch (Snigdha / Rūkṣa)
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setParamanuCohesive('snigdha')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      paramanuCohesive === 'snigdha'
                        ? 'bg-amber-700 text-white shadow-sm'
                        : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    Snigdha (स्निग्ध - Smooth)
                  </button>
                  <button
                    type="button"
                    onClick={() => setParamanuCohesive('ruksha')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      paramanuCohesive === 'ruksha'
                        ? 'bg-stone-700 text-white shadow-sm'
                        : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    Rūkṣa (रूक्ष - Dry)
                  </button>
                </div>
              </div>
            </div>

            {/* Active Combination Highlight */}
            {activeParamanuCombo && (
              <div className="p-4 rounded-xl border border-amber-300 bg-amber-50/70 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
                    Active Canonical State:
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-semibold">
                    Combination {PARAMANU_COMBINATIONS.findIndex((c) => c.id === activeParamanuCombo.id) + 1} of 4
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-stone-900">
                  {activeParamanuCombo.title} ({activeParamanuCombo.devanagari})
                </h4>
                <p className="text-xs text-stone-700">{activeParamanuCombo.note}</p>
              </div>
            )}

            {/* Agurulaghu Clarification */}
            <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs text-stone-700 leading-relaxed space-y-1">
              <span className="font-semibold text-stone-900">Why are Guru-Laghu and Mṛdu-Kaṭhina absent here? </span>
              In classical commentary (Sarvārthasiddhi on TS 5.23), a single Paramāṇu has no internal parts or composite depth. It is inherently <span className="font-semibold text-stone-900">Agurulaghu</span> (devoid of macroscopic weightiness or buoyant lightness) and neither soft nor hard.
            </div>
          </div>

          {/* Section B: Conceptual Aggregation to Skandha */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-base text-stone-900">
                2. Conceptual Aggregation: From Paramāṇu to Skandha
              </h4>
              <span className="text-xs font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                Interactive State: Step {aggregationStep} of 4
              </span>
            </div>
            <p className="text-xs text-stone-600">
              Move through the conceptual steps to observe how physical qualities manifest across different states of aggregation:
            </p>

            {/* Step Selection Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { step: 1, label: 'Single Paramāṇu', sub: 'Indivisible' },
                { step: 2, label: 'Dual Aggregate (Dvy-aṇuka)', sub: '2 Paramāṇus' },
                { step: 3, label: 'Multi-part Aggregate', sub: 'Cluster' },
                { step: 4, label: 'Macroscopic Skandha', sub: 'Observable Body' }
              ].map((s) => (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setAggregationStep(s.step)}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    aggregationStep === s.step
                      ? 'bg-amber-100/80 border-amber-600 ring-1 ring-amber-500 font-semibold text-stone-900'
                      : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <p className="text-xs font-semibold">{s.label}</p>
                  <p className="text-[10px] text-stone-500">{s.sub}</p>
                </button>
              ))}
            </div>

            {/* Dynamic Step Display */}
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-3">
              {aggregationStep === 1 && (
                <>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-600 inline-block" />
                    <h5 className="font-semibold text-sm text-stone-900">Isolated Paramāṇu (1 Space-Point / Pradeśa)</h5>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Manifests strictly 1 color, 1 taste, 1 smell, and 2 touches. Agurulaghu nature. Cannot be compressed or pierced.
                  </p>
                </>
              )}
              {aggregationStep === 2 && (
                <>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-700 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-700 inline-block -ml-1" />
                    <h5 className="font-semibold text-sm text-stone-900">Dvy-aṇuka Skandha (Bonding of 2 Paramāṇus)</h5>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Formed when two atoms unite through their cohesive qualities (Snigdha and Rūkṣa). It forms the foundational composite state, still beyond gross human perception.
                  </p>
                </>
              )}
              {aggregationStep === 3 && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      <span className="w-3 h-3 rounded-full bg-amber-800 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-700 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-600 inline-block" />
                    </div>
                    <h5 className="font-semibold text-sm text-stone-900">Saṅkhyāta / Asaṅkhyāta Aggregate</h5>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Aggregates of numerable or innumerable atoms. Distinct structural cohesion develops as atoms interact across multiple points.
                  </p>
                </>
              )}
              {aggregationStep === 4 && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-md bg-amber-800 shadow-sm" />
                    <h5 className="font-semibold text-sm text-stone-900">Bādara (Gross) Skandha — Observable Objects</h5>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Everyday objects (an earthen vessel, a gemstone, water, a fruit). In these macroscopic bodies, multiple colors, complex blended tastes, and all eight touches (including heaviness, lightness, softness, and hardness) become manifest simultaneously.
                  </p>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* MODULE 3: RASA & JAIN FOOD DISCERNMENT */}
      {activeModule === 'rasa-dietary' && (
        <section className="space-y-6 animate-fade">
          {/* Sub-tab Navigation */}
          <div className="flex gap-2 p-1.5 bg-stone-100/90 rounded-2xl border border-stone-200">
            <button
              type="button"
              onClick={() => setDietarySubTab('botanical')}
              className={`flex-1 py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all cursor-pointer ${
                dietarySubTab === 'botanical'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-700 hover:bg-white hover:text-stone-900'
              }`}
            >
              1. Botanical Discernment (Pratyeka vs. Sādhāraṇa)
            </button>
            <button
              type="button"
              onClick={() => setDietarySubTab('vigai')}
              className={`flex-1 py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all cursor-pointer ${
                dietarySubTab === 'vigai'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-700 hover:bg-white hover:text-stone-900'
              }`}
            >
              2. The Six Vigais & Ayambil
            </button>
          </div>

          {/* SUB-TAB A: BOTANICAL DISCERNMENT */}
          {dietarySubTab === 'botanical' && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4">
                <h3 className="text-base font-semibold text-amber-900">
                  Pratyeka vs. Sādhāraṇa Vanaspatikāya (Gommaṭasāra 192–193 & Jīvavicāra 18)
                </h3>
                <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                  Select any plant example to inspect its living soul classification, traditional criteria, and scriptural verification status:
                </p>
              </div>

              {/* Botanical Item Selector Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {BOTANICAL_EXAMPLES.map((b) => {
                  const isSelected = selectedBotanical === b.id;
                  const isSadharana = b.category === 'sadharana';
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setSelectedBotanical(b.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-amber-600 ring-2 ring-amber-500/50 bg-amber-50/70 shadow-sm'
                          : 'border-stone-200 bg-white hover:border-amber-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-stone-900">{b.name}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                            isSadharana ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {isSadharana ? 'Anantakāya' : 'Pratyeka'}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5">{b.devanagari}</p>
                    </button>
                  );
                })}
              </div>

              {/* Selected Botanical Detail Card */}
              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-3.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <div>
                    <h4 className="font-semibold text-lg text-stone-900">
                      {currentBotanicalItem.name} ({currentBotanicalItem.devanagari})
                    </h4>
                    <p className="text-xs font-medium text-amber-900 mt-0.5">
                      {currentBotanicalItem.categoryLabel}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center text-xs px-3 py-1 rounded-full font-semibold ${
                      currentBotanicalItem.category === 'sadharana'
                        ? 'bg-red-50 text-red-800 border border-red-200'
                        : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}
                  >
                    {currentBotanicalItem.soulRatio}
                  </span>
                </div>

                {/* Scriptural basis label */}
                <div className="bg-stone-50 rounded-xl p-3 border border-stone-200 text-xs text-stone-700 space-y-1">
                  <span className="font-semibold text-stone-900">Scriptural Verification: </span>
                  <p className="text-stone-600">{currentBotanicalItem.statusLabel}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl border border-stone-100 bg-stone-50">
                    <span className="font-semibold text-stone-900 block mb-1">Morphological Criteria:</span>
                    <p className="text-stone-600 leading-relaxed">{currentBotanicalItem.criteriaMatch}</p>
                  </div>
                  <div className="p-3 rounded-xl border border-stone-100 bg-stone-50">
                    <span className="font-semibold text-stone-900 block mb-1">Ahimsa & Ethical Rationale:</span>
                    <p className="text-stone-600 leading-relaxed">{currentBotanicalItem.reason}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SUB-TAB B: THE SIX VIGAI PLATE & AYAMBIL */}
          {dietarySubTab === 'vigai' && (
            <div className="space-y-6">
              {/* Part 1: Interactive Six-Vigai Plate */}
              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <div>
                    <h4 className="font-semibold text-base text-stone-900">
                      The Six Vigais (Pravacanasāroddhāra 101.720)
                    </h4>
                    <p className="text-xs text-stone-500">
                      Śvetāmbara Canonical Framework: Toggle each Vigai to examine its influence on sensory attachment.
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                    Active on Plate: {activeVigaiCount} of 6
                  </span>
                </div>

                {/* Vigai Toggle Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {SHVETAMBARA_VIGAI_LIST.map((v) => {
                    const isOn = activeVigais[v.id];
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => toggleVigai(v.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isOn
                            ? 'bg-amber-50/70 border-amber-400 text-stone-900 shadow-sm'
                            : 'bg-stone-50 border-stone-200 text-stone-400 opacity-60'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">{v.name}</span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                              isOn ? 'bg-amber-600 text-white' : 'bg-stone-200 text-stone-600'
                            }`}
                          >
                            {isOn ? 'Included' : 'Relinquished'}
                          </span>
                        </div>
                        <p className="text-xs text-stone-600 mt-0.5">{v.devanagari} — {v.english}</p>
                        <p className="text-xs text-stone-600 mt-2 leading-relaxed">{v.vigaiImpact}</p>
                      </button>
                    );
                  })}
                </div>

                <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-600 border border-stone-100">
                  <span className="font-semibold text-stone-800">Sensory Restraint Note: </span>
                  Voluntarily giving up one or more Vigais is the practice of <span className="font-semibold text-stone-900">Rasa-parityāga</span> (the 4th Bāhya Tapa in TS 9.19), practiced to quiet passions (Kashāyas) and overcome spiritual carelessness (Pramāda).
                </div>
              </div>

              {/* Part 2: Independent Ayambil Card (Preserving Concept.md exact doctrine) */}
              <div className="rounded-2xl border border-amber-300 bg-amber-50/60 p-5 space-y-3 shadow-sm">
                <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                  <h4 className="font-semibold text-base text-amber-900">
                    The Independent Austerity of Ayambil (आचाम्ल / आयंबिल)
                  </h4>
                  <span className="text-xs font-mono bg-amber-200/80 px-2.5 py-1 rounded-full text-amber-950 font-semibold">
                    Distinct Bāhya Tapa
                  </span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Ayambil is <span className="font-semibold text-stone-900">not</span> simply a matter of toggling off ingredients from an ordinary meal. It is an independent, highly disciplined spiritual austerity requiring:
                </p>
                <ul className="list-disc pl-5 text-xs text-stone-700 space-y-1.5 leading-relaxed">
                  <li>
                    <span className="font-semibold text-stone-900">Single Sitting (Eka-āsana): </span>
                    Eating only once in a single continuous posture during daylight hours.
                  </li>
                  <li>
                    <span className="font-semibold text-stone-900">Plain Boiled Grains: </span>
                    Consuming only simple boiled cereals or legumes (such as wheat, rice, or chickpeas) prepared strictly without any of the six Vigais—no milk, curd, ghee, oil, sugar/sweeteners, or frying.
                  </li>
                  <li>
                    <span className="font-semibold text-stone-900">Pure Spiritual Intent: </span>
                    Practiced exclusively for <span className="font-semibold text-stone-900">Rasendriya-vijaya</span> (mastery over the sense of taste) to maintain the body for contemplation without cultivating sensory craving.
                  </li>
                  <li>
                    <span className="font-semibold text-stone-900">Community Observances: </span>
                    Prominently observed during the bi-annual <span className="font-semibold text-stone-900">Navapad Oli</span> in the Śvetāmbara tradition with dedicated community dining guidelines.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </section>
      )}
    </LabEmbedded>
  );
}
