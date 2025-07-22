const VideoSection = () => {
  return (
    <div className="bg-green-900 p-8">
      <div className="text-4xl text-center font-bold text-white">
        The Paradise Experience
      </div>

      <div className="p-4">
        <div className="border border-2 p-3 w-full max-w-3xl aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/zZ2Ocm_hks8?si=-PTDI0Z3MYrX9Kbr"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
