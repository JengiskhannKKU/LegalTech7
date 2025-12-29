import Link from "next/link";
import styles from "@/components/ui/Button/Button.module.css";

const stats = [
  {
    label: "รอบสแกนดาวเทียม",
    value: "ทุก 4 ชั่วโมง",
  },
  {
    label: "ความเร็วแจ้งเตือน",
    value: "ภายใน 2 นาที",
  },
  {
    label: "หลักฐานพร้อมศาล",
    value: "รายงานอัตโนมัติ",
  },
];

const features = [
  {
    tag: "ความเสี่ยง",
    title: "ประเมินความเสี่ยงทางกฎหมายที่ดิน",
    description:
      "วิเคราะห์ครอบครองปรปักษ์ การรุกล้ำ ภาระจำยอม และความซับซ้อนด้านมรดก",
  },
  {
    tag: "เฝ้าระวัง",
    title: "ติดตามการใช้ที่ดินแบบเรียลไทม์",
    description:
      "ตรวจจับการเปลี่ยนแปลงจากภาพดาวเทียมและข้อมูลทะเบียน พร้อมการแจ้งเตือนทันที",
  },
  {
    tag: "เอกสาร",
    title: "สร้างเอกสารคุ้มครองสิทธิอัตโนมัติ",
    description:
      "หนังสือคัดค้าน หนังสือแจ้งเตือน และแบบฟอร์มที่พร้อมใช้สำหรับเจ้าของที่ดิน",
  },
  {
    tag: "คำปรึกษา",
    title: "ปรึกษาทนายและไกล่เกลี่ยก่อนฟ้อง",
    description:
      "เชื่อมต่อผู้เชี่ยวชาญ พร้อมแนวทางเจรจาและการจัดเตรียมเอกสารอย่างเป็นระบบ",
  },
  {
    tag: "ประกันภัย",
    title: "ประกันข้อพิพาทที่ดิน",
    description:
      "คุ้มครองค่าใช้จ่ายทางกฎหมาย ค่ารังวัด และการดำเนินการภาคสนาม",
  },
  {
    tag: "ตอบสนอง",
    title: "ตรวจพบการรุกล้ำและส่งทีมภาคสนาม",
    description:
      "เมื่อพบความผิดปกติ ระบบจะจัดทีมสำรวจและออกหนังสือแจ้งอย่างเป็นทางการ",
  },
];

const workflowSteps = [
  {
    title: "จัดการข้อมูลที่ดิน",
    description: "อัปโหลดเอกสารและกำหนดแนวเขตการเฝ้าระวัง",
  },
  {
    title: "ประเมินความเสี่ยง",
    description: "ระบบวิเคราะห์ความเสี่ยงเชิงกฎหมายและจัดลำดับความสำคัญ",
  },
  {
    title: "แจ้งเตือนและเอกสาร",
    description: "ตรวจพบความผิดปกติ สร้างเอกสาร และเก็บหลักฐานทันที",
  },
  {
    title: "ระงับข้อพิพาทก่อนฟ้อง",
    description: "ประสานการไกล่เกลี่ยหรือส่งทีมภาคสนามตามระดับความเสี่ยง",
  },
];

const satelliteSteps = [
  "สแกนดาวเทียมอย่างต่อเนื่อง",
  "ยืนยันความผิดปกติด้วย AI และผู้เชี่ยวชาญ",
  "ส่งทีมสำรวจภาคสนามและบันทึกหลักฐาน",
  "ออกหนังสือแจ้งเพื่อคุ้มครองสิทธิทันที",
];

const serviceCards = [
  {
    title: "เอกสารกฎหมายอัตโนมัติ",
    description: "เทมเพลตพร้อมใช้และคำแนะนำเบื้องต้นสำหรับเจ้าของที่ดิน",
    href: "/dashboard/documents",
  },
  {
    title: "ปรึกษาทนายเฉพาะทาง",
    description: "นัดหมายผู้เชี่ยวชาญและวางแผนการแก้ข้อพิพาทเชิงรุก",
    href: "/dashboard/consultation",
  },
  {
    title: "ประกันข้อพิพาทที่ดิน",
    description: "ปกป้องค่าใช้จ่ายทางกฎหมาย พร้อมสิทธิประโยชน์การเฝ้าระวัง",
    href: "/dashboard/insurance",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-amber-50 p-8 shadow-sm lg:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  LandGuard AI
                </p>
                <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">
                  ป้องกันข้อพิพาทที่ดินก่อนเข้าสู่ศาลด้วยระบบเฝ้าระวังเชิงรุก
                </h1>
                <p className="mt-4 text-lg text-slate-600">
                  LandGuard AI เปลี่ยนกฎหมายที่ดินจากการแก้ปัญหาหลังเกิดเหตุ เป็นระบบจัดการ
                  ความเสี่ยงล่วงหน้า ประเมินความเสี่ยง เฝ้าระวังการใช้ที่ดิน สร้างเอกสารคุ้มครอง
                  สิทธิ และประสานการระงับข้อพิพาทตั้งแต่ระยะต้น
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/dashboard" className={`${styles.button} ${styles.primary}`}>
                  ดูแดชบอร์ดสด
                </Link>
                <Link href="/dashboard/lands" className={`${styles.button} ${styles.secondary}`}>
                  เริ่มประเมินความเสี่ยง
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/60 bg-white/80 p-4 text-sm shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">สถานะการเฝ้าระวัง</p>
                    <p className="text-xs text-slate-500">อัปเดตล่าสุดเมื่อ 2 นาทีที่แล้ว</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    ปกติ
                  </span>
                </div>
                <div className="relative mt-4 h-40 overflow-hidden rounded-2xl border border-slate-200 bg-[radial-gradient(circle_at_1px_1px,_rgba(15,23,42,0.16)_1px,_transparent_0)] [background-size:22px_22px]">
                  <div className="absolute left-1/2 top-1/2 h-20 w-28 -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-rose-500/80 shadow-[0_12px_24px_rgba(239,68,68,0.18)]">
                    <span className="absolute -top-3 left-0 rounded bg-rose-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                      AI ตรวจพบ 92%
                    </span>
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-white">
                    โซน 12B
                  </span>
                  <p className="absolute inset-0 flex items-center justify-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    แผนที่เฝ้าระวัง
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-600">
                  <div>
                    <p className="text-slate-400">พิกัด</p>
                    <p className="font-semibold text-slate-800">18.7912° N, 98.9654° E</p>
                  </div>
                  <div>
                    <p className="text-slate-400">แหล่งภาพ</p>
                    <p className="font-semibold text-slate-800">Sentinel-2B</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-900 p-5 text-white shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">ดัชนีความเสี่ยงรวม</p>
                    <p className="text-xs text-slate-300">สรุปจากการเฝ้าระวังล่าสุด</p>
                  </div>
                  <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-200">
                    เฝ้าระวัง
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  <div>
                    <div className="flex justify-between text-xs">
                      <span>ครอบครองปรปักษ์</span>
                      <span className="text-rose-200">75%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[75%] rounded-full bg-rose-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs">
                      <span>การรุกล้ำ</span>
                      <span className="text-amber-200">38%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[38%] rounded-full bg-amber-300" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs">
                      <span>มรดก</span>
                      <span className="text-emerald-200">10%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[10%] rounded-full bg-emerald-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            ฟังก์ชันหลัก
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            ระบบป้องกันข้อพิพาทครบวงจรสำหรับเจ้าของที่ดิน
          </h2>
          <p className="text-slate-600">
            รวมการประเมินความเสี่ยง การเฝ้าระวัง และการตอบสนองเชิงกฎหมายไว้ในแพลตฟอร์มเดียว
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {feature.tag}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              เวิร์กโฟลว์เชิงป้องกัน
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              จัดการความเสี่ยงก่อนเกิดข้อพิพาท
            </h2>
            <div className="mt-6 space-y-4">
              {workflowSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-700">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              การตอบสนองด้วยดาวเทียม
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              ตรวจพบความผิดปกติและส่งทีมภาคสนามทันที
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              เมื่อระบบพบความเสี่ยง จะยืนยันผลและประสานการตรวจพื้นที่ พร้อมออกหนังสือแจ้งอย่างเป็นทางการ
            </p>
            <div className="mt-6 space-y-3">
              {satelliteSteps.map((step) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  <p className="text-sm text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            บริการเสริม
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">เครื่องมือเสริมเพื่อคุ้มครองสิทธิ</h2>
          <p className="text-slate-600">
            เลือกใช้งานบริการที่ช่วยให้เจ้าของที่ดินจัดการความเสี่ยงได้ครบวงจร
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {serviceCards.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{service.description}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-slate-700 underline underline-offset-4">
                ดูรายละเอียด
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 p-8 text-white shadow-sm md:p-10">
          <h2 className="text-3xl font-semibold">เริ่มป้องกันข้อพิพาทที่ดินตั้งแต่วันนี้</h2>
          <p className="mt-3 text-sm text-slate-200 md:text-base">
            ตั้งค่าการเฝ้าระวัง ออกเอกสารคุ้มครองสิทธิ และเข้าถึงผู้เชี่ยวชาญได้ภายในไม่กี่ชั่วโมง
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="rounded-full bg-black/90  black px-6 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5"
            >
              เปิดแดชบอร์ด LandGuard
            </Link>
            <Link
              href="/dashboard/consultation"
              className="rounded-full border border-white/40 px-6 py-2 text-sm font-semibold text-white/90 transition hover:border-white"
            >
              นัดหมายที่ปรึกษากฎหมาย
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
