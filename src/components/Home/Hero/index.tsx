import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const reviews = [
  {
    name: "Properties",
    id: "01",
    body: "We develop and manage residential and commercial properties built for long term value and modern living.",
    img: "https://avatar.vercel.sh/aurotra",
  },
  {
    name: "Hospitality",
    id: "02",
    body: "Hospitality spaces designed around comfort, experience, and thoughtful attention to detail.",
    img: "https://avatar.vercel.sh/saffron",
  },
  {
    name: "Interior Design",
    id: "03",
    body: "Interior design that balances aesthetics and function to create timeless, livable spaces.",
    img: "https://avatar.vercel.sh/corral",
  }, {
    name: "Properties",
    id: "04",
    body: "We develop and manage residential and commercial properties built for long term value and modern living.",
    img: "https://avatar.vercel.sh/saffronn",
  },
  {
    name: "Hospitality",
    id: "05",
    body: "Hospitality spaces designed around comfort, experience, and thoughtful attention to detail.",
    img: "https://avatar.vercel.sh/azure",
  },
  {
    name: "Interior Design",
    id: "06",
    body: "Interior design that balances aesthetics and function to create timeless, livable spaces.",
    img: "https://avatar.vercel.sh/auroa",
  }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  id,
  name,
  body,
}: {
  img: string
  name: string
  id: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
