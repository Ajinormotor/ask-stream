interface StatCardProps {
  label: string;
  value: string;
}

const StatCard = ({ label, value }: StatCardProps) => {
  return (
    <div className="border border-[#EDEEF0] rounded-xl p-4">
      <p className="text-sm text-[#667085]">{label}</p>
      <p className="text-xl font-semibold text-[#0F172A]">{value}</p>
    </div>
  );
};

export default StatCard;
