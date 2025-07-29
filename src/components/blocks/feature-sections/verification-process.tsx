"use client"

import { ShieldCheck, Clock, Lock, Zap, ArrowRight, CheckCircle } from "lucide-react"
import { Safari } from "@/components/magicui/safari"

export default function VerificationProcess() {
  return (
    <section id="verification-process" className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm font-semibold text-[#5995eb] uppercase tracking-wider mb-4">
            Public Verification
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Transparent & Accessible Image Authentication
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Anyone can verify the authenticity of YumeProof images through our public verification interface. 
            The verification process is completely transparent, providing detailed cryptographic proof without 
            compromising privacy or requiring special software.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Verification Features */}
          <div>
            <h4 className="text-xl font-semibold mb-8 text-foreground">Verification Features</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Instant verification results</h5>
                  <p className="text-muted-foreground text-sm">Get immediate confirmation with comprehensive details in seconds.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Cryptographic proof validation</h5>
                  <p className="text-muted-foreground text-sm">Mathematical certainty through advanced cryptography and tamper detection.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Lock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Blockchain transaction verification</h5>
                  <p className="text-muted-foreground text-sm">Immutable records stored on decentralized networks for maximum trust.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">No registration required</h5>
                  <p className="text-muted-foreground text-sm">Verify any YumeProof image instantly - no accounts, personal data, or barriers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Safari Browser Mockup */}
          <div className="relative">
            <Safari
              url="yumeproof.com/verify"
              className="w-full max-w-4xl mx-auto scale-110"
              imageSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI3NTAiIHZpZXdCb3g9IjAgMCAxMjAwIDc1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNzUwIiBmaWxsPSIjRkZGRkZGIi8+CjwhLS0gTWFpbiBDb250YWluZXIgLS0+CjxyZWN0IHg9IjgwIiB5PSI4MCIgd2lkdGg9IjEwNDAiIGhlaWdodD0iNTkwIiBmaWxsPSIjRkZGRkZGIi8+CjwhLS0gVGl0bGUgQXJlYSAtLT4KPHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMiPll1bWVQcm9vZiBWZXJpZmllcjwvdGV4dD4KPHR4dCB4PSI5NzAiIHk9IjEzNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5Ij5MaXZlPC90ZXh0Pgo8IS0tIFVwbG9hZCBBcmVhIC0tPgo8cmVjdCB4PSI1NDAiIHk9IjE4MCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIyNDAiIHJ4PSIxMiIgc3Ryb2tlPSIjRERERERGIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEwIDEwIi8+CjxjaXJjbGUgY3g9IjgyMCIgY3k9IjI0MCIgcj0iMjQiIGZpbGw9IiNGNUY1RjUiLz4KPHR4dCB4PSI4MTQiIHk9IjI0OCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0Ij7wn5OIPC90ZXh0Pgo8dGV4dCB4PSI1ODUiIHk9IjMxMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjNjY2Ij5Ecm9wIFl1bWVQcm9vZiBpbWFnZSBoZXJlIG9yIGNsaWNrIHRvIGJyb3dzZTwvdGV4dD4KPCEtLSBWZXJpZmljYXRpb24gUmVzdWx0IC0tPgo8cmVjdCB4PSI1NDAiIHk9IjQ2MCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSI1OCIgcng9IjgiIGZpbGw9IiNGMEY5RkYiLz4KPGNpcmNsZSBjeD0iNTcwIiBjeT0iNDg5IiByPSIxMCIgZmlsbD0iIzEwQjk4MSIvPgo8dGV4dCB4PSI1NjMiIHk9IjQ5NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjRkZGIj7inJM8L3RleHQ+Cjx0ZXh0IHg9IjU5NSIgeT0iNDk1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMDY0RTNBIj5WYWxpZCBTaWduYXR1cmU8L3RleHQ+Cjx0ZXh0IHg9IjEwMDAiIHk9IjQ5NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTBCOTgxIj7inJMgQXV0aGVudGljPC90ZXh0Pgo8IS0tIERldGFpbHMgR3JpZCAtLT4KPHR4dCB4PSI1NDAiIHk9IjU1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOTk5Ij5IYXNoOjwvdGV4dD4KPHR4dCB4PSI1NDAiIHk9IjU3NSIgZm9udC1mYW1pbHk9Ik1vbm9zcGFjZSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzMzMyI+ZjdhMy4uLmU5YzI8L3RleHQ+Cjx0ZXh0IHg9Ijc3MCIgeT0iNTU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM5OTkiPkJsb2NrY2hhaW46PC90ZXh0Pgo8dGV4dCB4PSI3NzAiIHk9IjU3NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMzMzIj5FdGhlcmV1bSBNYWlubmV0PC90ZXh0Pgo8dGV4dCB4PSI1NDAiIHk9IjYwNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOTk5Ij5DcmVhdG9yOjwvdGV4dD4KPHR4dCB4PSI1NDAiIHk9IjYyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMzMzIj5WZXJpZmllZDwvdGV4dD4KPHR4dCB4PSI3NzAiIHk9IjYwNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOTk5Ij5UaW1lc3RhbXA6PC90ZXh0Pgo8dGV4dCB4PSI3NzAiIHk9IjYyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMzMzIj4yIGhycyBhZ288L3RleHQ+CjwhLS0gVmlldy4FCmVwb3J0IEJ1dHRvbiAtLT4KPHJlY3QgeD0iNTQwIiB5PSI2NDUiIHdpZHRoPSI1NjAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjMDAwIi8+Cjx0ZXh0IHg9IjgwNSIgeT0iNjY4IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGIj5WaWV3IEZ1bGwgUmVwb3J0PC90ZXh0Pgo8dGV4dCB4PSI5NDAiIHk9IjY2OCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjRkZGIj7ihpI8L3RleHQ+CjwhLS0gTGVmdCBTaWRlIEZlYXR1cmVzIC0tPgo8dGV4dCB4PSIxMDAiIHk9IjE5NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzMzMyI+VmVyaWZpY2F0aW9uIEZlYXR1cmVzPC90ZXh0Pgo8IS0tIEZlYXR1cmUgSXRlbXMgLS0+CjxjaXJjbGUgY3g9IjEyMCIgY3k9IjI0MCIgcj0iMTYiIGZpbGw9IiNGNUY1RjUiLz4KPHR4dCB4PSIxMTQiIHk9IjI0NiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2Ij7wn5WCPC90ZXh0Pgo8dGV4dCB4PSIxNTAiIHk9IjI0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzMzMyI+SW5zdGFudCB2ZXJpZmljYXRpb24gcmVzdWx0czwvdGV4dD4KPHR4dCB4PSIxNTAiIHk9IjI2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2Ij5HZXQgaW1tZWRpYXRlIGNvbmZpcm1hdGlvbiB3aXRoIGNvbXByZWhlbnNpdmUgZGV0YWlscy4uLjwvdGV4dD4KPGNpcmNsZSBjeD0iMTIwIiBjeT0iMzAwIiByPSIxNiIgZmlsbD0iI0Y1RjVGNSIvPgo8dGV4dCB4PSIxMTQiIHk9IjMwNiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2Ij7wn5eCPC90ZXh0Pgo8dGV4dCB4PSIxNTAiIHk9IjMwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzMzMyI+Q3J5cHRvZ3JhcGhpYyBwcm9vZiB2YWxpZGF0aW9uPC90ZXh0Pgo8dGV4dCB4PSIxNTAiIHk9IjMyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2Ij5NYXRoZW1hdGljYWwgY2VydGFpbnR5IHRocm91Z2ggYWR2YW5jZWQuLi48L3RleHQ+CjxjaXJjbGUgY3g9IjEyMCIgY3k9IjM2MCIgcj0iMTYiIGZpbGw9IiNGNUY1RjUiLz4KPHR4dCB4PSIxMTQiIHk9IjM2NiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2Ij7wn5OEPC90ZXh0Pgo8dGV4dCB4PSIxNTAiIHk9IjM2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzMzMyI+QmxvY2tjaGFpbiB0cmFuc2FjdGlvbiB2ZXJpZmljYXRpb248L3RleHQ+Cjx0ZXh0IHg9IjE1MCIgeT0iMzgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiPkltbXV0YWJsZSByZWNvcmRzIHN0b3JlZCBvbiBkZWNlbnRyYWxpemVkLi4uPC90ZXh0Pgo8Y2lyY2xlIGN4PSIxMjAiIGN5PSI0MjAiIHI9IjE2IiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjExNCIgeT0iNDI2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPuKUvTwvdGV4dD4KPHR4dCB4PSIxNTAiIHk9IjQyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzMzMyI+Tm8gcmVnaXN0cmF0aW9uIHJlcXVpcmVkPC90ZXh0Pgo8dGV4dCB4PSIxNTAiIHk9IjQ0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2Ij5WZXJpZnkgYW55IFl1bWVQcm9vZiBpbWFnZSBpbnN0YW50bHkgLS4uLjwvdGV4dD4KPC9zdmc+"
            />
          </div>
        </div>
      </div>
    </section>
  )
}