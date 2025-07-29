"use client";
import { Camera, CheckCircle2, ShieldCheck, Clock, Settings, User, Home, Upload, Bell, Image as ImageIcon } from "lucide-react";

export default function YumeProofShowcase() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[20px] rounded-[3rem] h-[800px] w-[380px] shadow-2xl scale-100">
            <div className="w-[180px] h-[25px] bg-gray-800 top-0 rounded-b-[1.5rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[42px] w-[4px] bg-gray-800 absolute -left-[24px] top-[96px] rounded-l-sm"></div>
            <div className="h-[58px] w-[4px] bg-gray-800 absolute -left-[24px] top-[160px] rounded-l-sm"></div>
            <div className="h-[58px] w-[4px] bg-gray-800 absolute -left-[24px] top-[232px] rounded-l-sm"></div>
            <div className="h-[78px] w-[4px] bg-gray-800 absolute -right-[24px] top-[190px] rounded-r-sm"></div>
            <div className="rounded-[2.5rem] overflow-hidden w-full h-full bg-white dark:bg-black">
              <div className="w-full h-full bg-white p-6 flex flex-col">
                {/* App Header */}
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">YumeProof</h1>
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                </div>
                
                {/* Mock App Interface */}
                <div className="flex-1 space-y-6">
                  {/* Upload Section */}
                  <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-blue-400 rounded-full mx-auto flex items-center justify-center mb-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <p className="text-base text-blue-600 font-medium">Tap to Verify Image</p>
                  </div>

                  {/* Recent Verifications */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Recent verifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="w-12 h-12 bg-green-200 rounded"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-600">Image_001.jpg</p>
                          <p className="text-sm text-green-600">Verified ✓</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                        <div className="w-12 h-12 bg-yellow-200 rounded"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-600">Image_002.jpg</p>
                          <p className="text-sm text-yellow-600 border-b border-dashed">Pending...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Bar */}
                <div className="border-t border-gray-200 pt-3 mt-auto">
                  <div className="flex justify-around">
                    <div className="text-blue-600 text-base font-medium">Home</div>
                    <div className="text-gray-400 text-base">Verify</div>
                    <div className="text-gray-400 text-base">Profile</div>
                    <div className="text-gray-400 text-base">Settings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}