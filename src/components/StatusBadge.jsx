function StatusBadge({ status }) {
  const statusStyles = {
    approved: {
      color:
        "bg-emerald-100 text-emerald-700 border border-emerald-200",
      icon: "✓",
      label: "Approved",
    },

    rejected: {
      color:
        "bg-red-100 text-red-700 border border-red-200",
      icon: "✕",
      label: "Rejected",
    },

    suspicious: {
      color:
        "bg-yellow-100 text-yellow-700 border border-yellow-200",
      icon: "⚠",
      label: "Suspicious",
    },

    pending: {
      color:
        "bg-blue-100 text-blue-700 border border-blue-200",
      icon: "⏳",
      label: "Pending",
    },
  };

  const currentStatus =
    statusStyles[status] || statusStyles.pending;

  return (
    <span
      className={`
        inline-flex items-center gap-2
        px-4 py-1.5 rounded-full
        text-sm font-semibold
        shadow-sm
        transition-all duration-200
        hover:scale-105
        ${currentStatus.color}
      `}
    >
      <span className="text-xs">
        {currentStatus.icon}
      </span>

      {currentStatus.label}
    </span>
  );
}

export default StatusBadge;