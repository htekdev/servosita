import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servosita — Tu salón, en tu bolsillo",
  description:
    "Gestiona tu salón de belleza desde tu celular. Agenda citas por WhatsApp, cobra automáticamente, y deja que Servosita se encargue del resto.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F5]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-[#3D2C2E] md:text-7xl">
              Tu salón,{" "}
              <span className="text-[#E8A0BF]">en tu bolsillo.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-[#7A5C6B]">
              Solo habla. Servosita se encarga del resto. Agenda citas por
              WhatsApp, cobra automáticamente, y maneja tu salón desde tu
              celular.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#waitlist"
                className="rounded-full bg-[#E8A0BF] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#B76E9B] hover:shadow-xl"
              >
                Únete a la lista de espera
              </a>
              <a
                href="#como-funciona"
                className="rounded-full border-2 border-[#E8A0BF] px-8 py-4 text-lg font-semibold text-[#B76E9B] transition hover:bg-[#FFF0F0]"
              >
                ¿Cómo funciona?
              </a>
            </div>
            <p className="mt-4 text-sm text-[#7A5C6B]">
              Menos papeleo. Más clientes. 💅
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-[#FFF0F0] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-[#3D2C2E] md:text-4xl">
            ¿Te suena familiar?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-4xl">📱</div>
              <h3 className="mt-4 text-xl font-semibold text-[#3D2C2E]">
                WhatsApp desbordado
              </h3>
              <p className="mt-2 text-[#7A5C6B]">
                Contestas mensajes entre cortes, pierdes citas, y tus clientas
                se desesperan esperando respuesta.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-4xl">📓</div>
              <h3 className="mt-4 text-xl font-semibold text-[#3D2C2E]">
                Agenda de papel
              </h3>
              <p className="mt-2 text-[#7A5C6B]">
                Tachaduras, citas olvidadas, horarios encimados. Tu libreta no
                te manda recordatorios.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-4xl">💸</div>
              <h3 className="mt-4 text-xl font-semibold text-[#3D2C2E]">
                Cobros perdidos
              </h3>
              <p className="mt-2 text-[#7A5C6B]">
                Servicios sin facturar, pagos a medias, y cero visibilidad de
                cuánto ganas realmente al mes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-[#3D2C2E] md:text-4xl">
            Así de fácil funciona
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8A0BF] text-2xl font-bold text-white">
                1
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#3D2C2E]">
                Describe tu salón
              </h3>
              <p className="mt-2 text-[#7A5C6B]">
                Habla o escribe. Dinos qué servicios ofreces, tus precios, tus
                horarios. En 10 minutos quedas.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F4845F] text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#3D2C2E]">
                Tus clientas agendan por WhatsApp
              </h3>
              <p className="mt-2 text-[#7A5C6B]">
                Mandan mensaje, eligen servicio y horario, y listo. Sin que tú
                muevas un dedo.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D4A574] text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#3D2C2E]">
                Cobra y crece
              </h3>
              <p className="mt-2 text-[#7A5C6B]">
                Facturas automáticas, recordatorios, y métricas claras. Tú
                enfócate en lo que amas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#FFF0F0] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-[#3D2C2E] md:text-4xl">
            Precios para todos los salones
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[#7A5C6B]">
            Empieza gratis. Crece a tu ritmo.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <PricingCard
              name="Gratis"
              price="$0"
              features={[
                "1 estilista",
                "30 citas/mes",
                "Agenda manual",
                "Onboarding por voz",
              ]}
            />
            <PricingCard
              name="Básico"
              price="$199"
              period="MXN/mes"
              features={[
                "Citas ilimitadas",
                "Agenda online",
                "CRM de clientes",
                "Facturación",
              ]}
            />
            <PricingCard
              name="Pro"
              price="$499"
              period="MXN/mes"
              popular
              features={[
                "WhatsApp booking",
                "Automatizaciones",
                "Multi-estilista",
                "Google Calendar",
              ]}
            />
            <PricingCard
              name="Equipo"
              price="$999"
              period="MXN/mes"
              features={[
                "Comisiones",
                "Inventario",
                "Marketing",
                "Multi-sucursal",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#3D2C2E] md:text-4xl">
            Sé de las primeras en probarlo
          </h2>
          <p className="mt-4 text-lg text-[#7A5C6B]">
            Estamos buscando 5 salones para nuestro programa de diseño. Acceso
            gratis de por vida a cambio de tu feedback honesto.
          </p>
          <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <input
              type="text"
              placeholder="Tu nombre"
              className="rounded-full border border-[#E8A0BF] bg-white px-6 py-3 text-[#3D2C2E] placeholder-[#7A5C6B] focus:outline-none focus:ring-2 focus:ring-[#E8A0BF]"
            />
            <input
              type="tel"
              placeholder="Tu WhatsApp"
              className="rounded-full border border-[#E8A0BF] bg-white px-6 py-3 text-[#3D2C2E] placeholder-[#7A5C6B] focus:outline-none focus:ring-2 focus:ring-[#E8A0BF]"
            />
            <button
              type="submit"
              className="rounded-full bg-[#E8A0BF] px-8 py-3 font-semibold text-white transition hover:bg-[#B76E9B]"
            >
              Quiero probar →
            </button>
          </form>
          <p className="mt-3 text-xs text-[#7A5C6B]">
            Sin compromiso. Te contactamos por WhatsApp.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E8A0BF]/20 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-[#7A5C6B]">
          <p className="font-semibold text-[#E8A0BF]">Servosita</p>
          <p className="mt-1">Tu salón, en tu bolsillo. 💅</p>
          <p className="mt-4">
            © 2026 Servosita. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}

function PricingCard({
  name,
  price,
  period,
  features,
  popular,
}: {
  name: string;
  price: string;
  period?: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 ${
        popular
          ? "border-2 border-[#E8A0BF] bg-white shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      {popular && (
        <span className="mb-2 inline-block rounded-full bg-[#E8A0BF] px-3 py-1 text-xs font-semibold text-white">
          Más popular
        </span>
      )}
      <h3 className="text-xl font-bold text-[#3D2C2E]">{name}</h3>
      <p className="mt-2">
        <span className="text-3xl font-bold text-[#3D2C2E]">{price}</span>
        {period && <span className="text-[#7A5C6B]"> {period}</span>}
      </p>
      <ul className="mt-4 space-y-2">
        {features.map((f) => (
          <li
            key={f}
            className="flex items-center gap-2 text-sm text-[#7A5C6B]"
          >
            <span className="text-[#7ECDA0]">✓</span> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
