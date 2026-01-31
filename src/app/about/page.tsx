import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "About",
  description: "About Harsh Sharma - engineer, artist, and builder.",
};

const BLUR_FADE_DELAY = 0.04;

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-w-2xl mx-auto py-[80px] sm:py-24 px-6">
      <section className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-medium text-2xl tracking-tighter">about</h1>
        </BlurFade>

        {/* One-liner introduction */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-base leading-relaxed">
            I&apos;m Harsh — an engineer who builds things, breaks things, learns from both, and occasionally captures life through a camera lens.
          </p>
        </BlurFade>

        {/* What I'm doing currently and why */}
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="space-y-4">
            <h2 className="font-medium text-lg tracking-tight">Currently</h2>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                I&apos;m a Software Engineer at AlphaSense, working on the Monitoring Platform team where I build event-driven alerting systems and notification infrastructure. I&apos;ve shipped priority queues that cut alert wait times by 29%, overhauled email template systems, and debugged everything from iOS double notifications to connection timeouts.
              </p>
              <p>
                Right now, I&apos;m deep into learning AI Engineering — LLMs, agents, and applied AI. The goal is to transition into building AI-powered products. I believe the most interesting problems in the next decade will sit at the intersection of software engineering and AI, and I want to be there building solutions.
              </p>
              <p>
                Why? Because I want to work on problems that matter, with people smarter than me, building things that have real impact. And yes, getting paid well for it doesn&apos;t hurt either.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Work I've done till now */}
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="space-y-4">
            <h2 className="font-medium text-lg tracking-tight">The Journey So Far</h2>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                I joined AlphaSense as part of their first batch of campus recruits. Started on the Dashboard team building React micro-apps and GraphQL APIs, then moved to the Platform team where I got my hands dirty with the full notification pipeline — from Node.js services to mobile push notifications.
              </p>
              <p>
                Along the way, I&apos;ve developed a deep understanding of end-to-end systems: TypeScript, Express, Nest.js, Apollo GraphQL, and the art of debugging production issues at 2 AM. I&apos;ve learned that the best engineers aren&apos;t just coders — they&apos;re problem solvers who understand the whole picture.
              </p>
              <p>
                Before AlphaSense, I was just a curious kid from a middle-class family who happened to fall in love with building things on computers. That curiosity hasn&apos;t changed — it&apos;s just found better problems to solve.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Life Philosophy */}
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="space-y-4">
            <h2 className="font-medium text-lg tracking-tight">How I Think About Life</h2>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                I believe life is like a fabric with many threads — some bright, some muted, all existing at once. In any moment, one thread feels fullest while others wait their turn. Happy or sad, hurtful or joyful, no single thread makes the life. So I try to keep moving, flowing with it, not attaching too hard to any one moment.
              </p>
              <p>
                My operating principle is simple: <em>Learn enough to form a smart hypothesis. Run the experiment. Update the model. Repeat.</em> Pure action without reflection is just thrashing. Pure reflection without action is just dreaming. You need the loop.
              </p>
              <p>
                I&apos;ve come a decent way given where I started, but I know I&apos;m far from where I want to be. That&apos;s fine. Abundance isn&apos;t only inherited — it&apos;s created. And people who create it themselves usually feel it more deeply than those who were handed it.
              </p>
              <p>
                The hardest truth I&apos;ve accepted: I&apos;ve been more of a consumer than a builder. Content, plans, ideas, books, theories — I&apos;ve consumed plenty. But building is what moves you forward. So that&apos;s what I&apos;m focused on now. Less consuming, more creating.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Closing line */}
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <p className="text-base pt-4 border-t">
            All threads together make the life. Keep weaving yours.
          </p>
        </BlurFade>
      </section>
    </main>
  );
}
