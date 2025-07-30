'use client'

import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { JoinWaitlistButton } from "@/components/form/waitlist-form";

export default function SimpleCentered() {
  return (
    <div id="hero" className="bg-transparent w-full max-w-full overflow-hidden">
      <div className="relative isolate px-4 sm:px-6 lg:px-8 w-full">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#90cdf4] to-[#5995eb] opacity-10 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        {/* Hero section with parallax scrolling */}
        <div className="mx-auto max-w-7xl min-h-[90vh] sm:min-h-[100vh] lg:min-h-[120vh] relative w-full">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-start pt-8 sm:pt-12 lg:pt-32 w-full">
            
            {/* Left column - Hero content (sticky positioning) */}
            <div className="text-center lg:text-left lg:sticky lg:top-70 lg:z-10 px-2 sm:px-4 lg:px-0 w-full">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-balance text-gray-900">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-0">
                  <img src="/yume.png" alt="YumeProof" className="h-8 sm:h-12 md:h-16 lg:h-20 w-auto px-1 sm:px-2 md:px-3" />
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold">YumeProof</span>
                </div>
              </h1>
              <h2 className="mt-3 sm:mt-4 lg:mt-6 font-subheading text-base sm:text-lg md:text-xl lg:text-2xl text-balance text-[#5995eb]">
                Proof-of-Concept Android Application
              </h2>
              <p className="mt-4 sm:mt-6 lg:mt-8 font-body text-sm sm:text-base md:text-lg lg:text-lg text-pretty text-gray-600 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
                Providing Proof-Of-Real-Image and Proof-Of-Real-Device technology to verify image originality through blockchain-based credentialing and advanced verification protocols.
              </p>
              
              {/* Join Waitlist Button */}
              <div className="flex justify-center lg:justify-start">
                <JoinWaitlistButton />
              </div>
            </div>

            {/* Right column - Phone showcase (scrolls normally first, then with text) */}
            <div className="flex items-center justify-center mt-4 sm:mt-8 lg:mt-0 w-full">
              <div className="relative scale-50 sm:scale-75 md:scale-90 lg:scale-100">
                <Iphone15Pro
                  className="w-[280px] sm:w-[340px] md:w-[360px] lg:w-[380px] h-auto"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMwIiBoZWlnaHQ9Ijg4MCIgdmlld0JveD0iMCAwIDQzMCA4ODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MzAiIGhlaWdodD0iODgwIiBmaWxsPSJ3aGl0ZSIvPgo8IS0tIEFwcCBIZWFkZXIgLS0+CjxyZWN0IHg9IjIwIiB5PSI2MCIgd2lkdGg9IjM5MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI0Y5RkFGQiIvPgo8dGV4dCB4PSI0MCIgeT0iOTUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMxRjI5Mzc+WXVtZVByb29mPC90ZXh0Pgo8Y2lyY2xlIGN4PSIzNzAiIGN5PSI5MCIgcj0iMTYiIGZpbGw9IiNFNUU3RUIiLz4KCjwhLS0gVXBsb2FkIFNlY3Rpb24gLS0+CjxyZWN0IHg9IjQwIiB5PSIxNDAiIHdpZHRoPSIzNTAiIGhlaWdodD0iMTQwIiByeD0iMTIiIGZpbGw9IiNEQkVBRkUiIHN0cm9rZT0iIzMzOTNERiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0IDQiLz4KPGN0aXJjbGUgY3g9IjIxNSIgY3k9IjE4NSIgcj0iMjQiIGZpbGw9IiMzMzkzREYiLz4KPHN2ZyB4PSIyMDMiIHk9IjE3MyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiPgo8cGF0aCBkPSJNMTIgNHYxNm04LThINGwiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo8dGV4dCB4PSIyMTUiIHk9IjI0NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNTAwIiBmaWxsPSIjMzM5M0RGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UYXAgdG8gVmVyaWZ5IEltYWdlPC90ZXh0PgoKPCEtLSBSZWNlbnQgVmVyaWZpY2F0aW9ucyAtLT4KPHR4dCB4PSI0MCIgeT0iMzMwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiMzNzQxNTEiPlJlY2VudCB2ZXJpZmljYXRpb25zPC90ZXh0PgoKPCEtLSBWZXJpZmllZCBJbWFnZSAtLT4KPHJlY3QgeD0iNDAiIHk9IjM1MCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSI2MCIgcng9IjgiIGZpbGw9IiNEQ0ZDRTciIHN0cm9rZT0iIzE2QTM0QSIvPgo8cmVjdCB4PSI2MCIgeT0iMzY1IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSIyIiBmaWxsPSIjQTNFNjM1Ii8+Cjx0ZXh0IHg9IjEwNSIgeT0iMzc3IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSI1MDAiIGZpbGw9IiM0QjVDNjgiPkltYWdlXzAwMS5qcGc8L3RleHQ+Cjx0ZXh0IHg9IjEwNSIgeT0iMzk1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNkEzNEEiPlZlcmlmaWVkIOKckzwvdGV4dD4KCjwhLS0gUGVuZGluZyBJbWFnZSAtLT4KPHJlY3QgeD0iNDAiIHk9IjQyNSIgd2lkdGg9IjM1MCIgaGVpZ2h0PSI2MCIgcng9IjgiIGZpbGw9IiNGRUY5QzMiIHN0cm9rZT0iI0Q5RjMzMyIvPgo8cmVjdCB4PSI2MCIgeT0iNDQwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSIyIiBmaWxsPSIjRkJCRjI0Ii8+Cjx0ZXh0IHg9IjEwNSIgeT0iNDUyIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSI1MDAiIGZpbGw9IiM0QjVDNjgiPkltYWdlXzAwMi5qcGc8L3RleHQ+Cjx0ZXh0IHg9IjEwNSIgeT0iNDcwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNENkY3MDUiIHRleHQtZGVjb3JhdGlvbj0idW5kZXJsaW5lIiBzdHJva2UtZGFzaGFycmF5PSI0IDQiPlBlbmRpbmcuLi48L3RleHQ+CgoKPCEtLSBOYXZpZ2F0aW9uIEJhciAtLT4KPGxpbmUgeDE9IjQwIiB5MT0iODAwIiB4Mj0iMzkwIiB5Mj0iODAwIiBzdHJva2U9IiNFNUU3RUIiIHN0cm9rZS13aWR0aD0iMSIvPgo8dGV4dCB4PSI4NSIgeT0iODM1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI1MDAiIGZpbGw9IiMzMzkzREYiPkhvbWU8L3RleHQ+Cjx0ZXh0IHg9IjE1NSIgeT0iODM1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5Q0EzQUYiPlZlcmlmeTwvdGV4dD4KPHR5dCB4PSIyNDAiIHk9IjgzNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOUNBM0FGIj5Qcm9maWxlPC90ZXh0Pgo8dGV4dCB4PSIzMjUiIHk9IjgzNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOUNBM0FGIj5TZXR0aW5nczwvdGV4dD4KPC9zdmc+"
                />
              </div>
            </div>

          </div>
          
          {/* Spacer to ensure proper scroll behavior */}
          <div className="h-16 sm:h-24 lg:h-48"></div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#90cdf4] to-[#5995eb] opacity-10 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}