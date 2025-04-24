import React from "react";
import { Badge } from "@/components/ui/badge";
import { Check, AlertCircle, Zap, Award, BarChart3, Users } from "lucide-react";

interface OfferDetailsProps {
  title?: string;
  originalPrice?: number;
  discountedPrice?: number;
  discountPercentage?: number;
  features?: string[];
  description?: string;
  requirements?: string[];
  accountTiers?: string[];
  tradingPlatforms?: string[];
  additionalBenefits?: string[];
}

const OfferDetails = ({
  title = "Trading with Zimtra - Your Trusted Trading Partner",
  originalPrice = 1000,
  discountedPrice = 750,
  discountPercentage = 25,
  features = [
    "Minimum deposit $1K+",
    "1x, 4x or 10x buying power options",
    "90% or 100% payout",
    "Volume-based commissions ($0.0015 - $0.0005)",
    "No per trade minimums",
    "No Pattern Day Trading Rule (PDT)",
    "Special promotional credit up to $1,000",
    "Access to multiple trading platforms",
  ],
  description = "Unlock your trading potential with Zimtra, where trading meets innovation. Our prop firm offers an unparalleled opportunity for traders to participate with confidence, efficiency, and profitability in the world of stocks.",
  requirements = [
    "Valid ID and proof of address",
    "Completed application form",
    "Basic trading knowledge assessment",
    "Minimum deposit of $1,000",
  ],
  accountTiers = ["Elite", "Pro", "Intermediate"],
  tradingPlatforms = [
    "Sterling Trader Pro",
    "DAS Trader",
    "Takion",
    "Lightspeed",
  ],
  additionalBenefits = [
    "24/7 technical support",
    "Educational resources and webinars",
    "Trading community access",
    "Weekly market analysis",
    "Personal account manager",
  ],
}: OfferDetailsProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Main Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          icon={<Zap className="h-8 w-8 text-emerald-500" />}
          title="Powerful Trading"
          description="Access up to 10x buying power with flexible options to match your trading style and risk tolerance."
        />
        <FeatureCard
          icon={<Award className="h-8 w-8 text-emerald-500" />}
          title="High Payouts"
          description="Enjoy industry-leading 90-100% payouts with transparent volume-based commission structures."
        />
        <FeatureCard
          icon={<BarChart3 className="h-8 w-8 text-emerald-500" />}
          title="No Restrictions"
          description="Trade freely without pattern day trading rules or per-trade minimums holding you back."
        />
      </div>

      {/* Pricing Tiers */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Choose Your <span className="text-emerald-500">Account Tier</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Intermediate Tier */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-colors group">
            <div className="p-6 border-b border-zinc-800">
              <h4 className="text-xl font-bold mb-2">Intermediate</h4>
              <p className="text-zinc-400 mb-4">Perfect for new traders</p>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold">$1,000</span>
                <span className="text-zinc-400 mb-1">min deposit</span>
              </div>
              <ul className="space-y-2">
                <FeatureItem text="1x buying power" />
                <FeatureItem text="90% payout" />
                <FeatureItem text="Basic support" />
              </ul>
            </div>
            <div className="p-6 bg-zinc-800/50">
              <button className="w-full py-2 rounded-lg border border-emerald-500 text-emerald-500 font-medium hover:bg-emerald-500/10 transition-colors">
                Select Plan
              </button>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="bg-zinc-900 border border-emerald-500/50 rounded-xl overflow-hidden relative group transform hover:scale-105 transition-all">
            <div className="absolute top-0 left-0 right-0 bg-emerald-500 text-center py-1 text-xs font-bold text-black">
              MOST POPULAR
            </div>
            <div className="p-6 border-b border-zinc-800 pt-8">
              <h4 className="text-xl font-bold mb-2">Pro</h4>
              <p className="text-zinc-400 mb-4">For serious traders</p>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold">$5,000</span>
                <span className="text-zinc-400 mb-1">min deposit</span>
              </div>
              <ul className="space-y-2">
                <FeatureItem text="4x buying power" />
                <FeatureItem text="95% payout" />
                <FeatureItem text="Priority support" />
                <FeatureItem text="$500 promotional credit" />
              </ul>
            </div>
            <div className="p-6 bg-emerald-500/10">
              <button className="w-full py-2 rounded-lg bg-emerald-500 text-black font-medium hover:bg-emerald-600 transition-colors">
                Select Plan
              </button>
            </div>
          </div>

          {/* Elite Tier */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-colors group">
            <div className="p-6 border-b border-zinc-800">
              <h4 className="text-xl font-bold mb-2">Elite</h4>
              <p className="text-zinc-400 mb-4">For professional traders</p>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold">$10,000</span>
                <span className="text-zinc-400 mb-1">min deposit</span>
              </div>
              <ul className="space-y-2">
                <FeatureItem text="10x buying power" />
                <FeatureItem text="100% payout" />
                <FeatureItem text="24/7 dedicated support" />
                <FeatureItem text="$1,000 promotional credit" />
                <FeatureItem text="Advanced analytics" />
              </ul>
            </div>
            <div className="p-6 bg-zinc-800/50">
              <button className="w-full py-2 rounded-lg border border-emerald-500 text-emerald-500 font-medium hover:bg-emerald-500/10 transition-colors">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trading Platforms */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Premium <span className="text-emerald-500">Trading Platforms</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tradingPlatforms.map((platform, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center hover:border-emerald-500/50 transition-colors"
            >
              <div className="bg-zinc-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-emerald-500 font-bold">
                  {platform.charAt(0)}
                </span>
              </div>
              <h4 className="font-medium">{platform}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Commission Structure */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Transparent{" "}
          <span className="text-emerald-500">Commission Structure</span>
        </h3>
        <div className="overflow-hidden rounded-xl border border-zinc-800">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-zinc-900">
                <th className="p-4 text-left font-medium text-emerald-500 border-b border-zinc-800">
                  Monthly Volume
                </th>
                <th className="p-4 text-left font-medium text-emerald-500 border-b border-zinc-800">
                  Commission Rate
                </th>
                <th className="p-4 text-left font-medium text-emerald-500 border-b border-zinc-800 hidden md:table-cell">
                  Savings
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              <tr className="bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors">
                <td className="p-4">Up to 1M shares</td>
                <td className="p-4 font-medium">$0.0015 per share</td>
                <td className="p-4 hidden md:table-cell text-zinc-400">
                  Standard rate
                </td>
              </tr>
              <tr className="bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors">
                <td className="p-4">1M - 5M shares</td>
                <td className="p-4 font-medium">$0.0010 per share</td>
                <td className="p-4 hidden md:table-cell text-emerald-500">
                  33% savings
                </td>
              </tr>
              <tr className="bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors">
                <td className="p-4">5M+ shares</td>
                <td className="p-4 font-medium">$0.0005 per share</td>
                <td className="p-4 hidden md:table-cell text-emerald-500">
                  66% savings
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Additional <span className="text-emerald-500">Benefits</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/20 transition-colors">
            <Users className="h-8 w-8 text-emerald-500 mb-4" />
            <h4 className="text-xl font-bold mb-3">Community & Support</h4>
            <ul className="space-y-2">
              {additionalBenefits.slice(0, 3).map((benefit, index) => (
                <FeatureItem key={index} text={benefit} />
              ))}
            </ul>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/20 transition-colors">
            <BarChart3 className="h-8 w-8 text-emerald-500 mb-4" />
            <h4 className="text-xl font-bold mb-3">Trading Resources</h4>
            <ul className="space-y-2">
              {additionalBenefits.slice(3).map((benefit, index) => (
                <FeatureItem key={index} text={benefit} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="h-6 w-6 text-emerald-500" />
          <h3 className="text-xl font-bold">Account Requirements</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {requirements.map((req, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="mt-1 bg-emerald-500/10 p-1 rounded-full">
                <Check className="h-3 w-3 text-emerald-500" />
              </div>
              <span className="text-zinc-300">{req}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center bg-gradient-to-r from-emerald-500/10 via-emerald-500/20 to-emerald-500/10 rounded-xl p-8 border border-emerald-500/20">
        <h3 className="text-2xl font-bold mb-3">Limited Time Offer</h3>
        <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
          This exclusive promotion is only available for a limited time. Join
          now to secure your promotional credit and start trading with Zimtra's
          premium platform.
        </p>
        <Badge
          variant="outline"
          className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 px-3 py-1"
        >
          Up to $1,000 promotional credit available
        </Badge>
      </div>
    </div>
  );
};

const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-2">
    <Check className="h-4 w-4 text-emerald-500" />
    <span>{text}</span>
  </li>
);

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/30 transition-all hover:-translate-y-1 group">
    <div className="mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-zinc-400">{description}</p>
  </div>
);

export default OfferDetails;
