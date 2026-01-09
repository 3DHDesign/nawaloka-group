type VisionVideoSectionProps = {
  title?: string;
  youtubeUrl?: string;
};

function getYouTubeId(url: string) {
  const short = url.match(/youtu\.be\/([^?&/]+)/)?.[1];
  if (short) return short;

  const watch = url.match(/[?&]v=([^?&/]+)/)?.[1];
  if (watch) return watch;

  const embed = url.match(/youtube\.com\/embed\/([^?&/]+)/)?.[1];
  if (embed) return embed;

  return "";
}

export default function VisionVideoSection({
  title = "Vision in Motion",
  youtubeUrl = "https://youtu.be/QsWJp7cTD9Y",
}: VisionVideoSectionProps) {
  const id = getYouTubeId(youtubeUrl);

  return (
    <section className="bg-[#fafafa] py-24">
      <div className="px-[clamp(1rem,4vw,3.5rem)]">
        <div className="mx-auto w-full max-w-[980px]">
          <div className="relative overflow-hidden rounded-2xl bg-black shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
            {/* Top-right label */}
            <div className="pointer-events-none absolute right-8 top-6 z-10">
              <p className="text-white/90 text-2xl font-semibold">{title}</p>
            </div>

            {/* Video */}
            <div className="relative w-full" style={{ aspectRatio: "16 / 7" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src={
                  id
                    ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${id}&rel=0&modestbranding=1`
                    : undefined
                }
                title={title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
