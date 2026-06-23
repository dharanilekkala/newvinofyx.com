export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-2 border-blue-100" />
          <div className="absolute inset-0 rounded-full border-2 border-t-blue-600 animate-spin" />
        </div>
        <p className="text-blue-600 text-xs tracking-[0.25em] uppercase font-medium">Loading</p>
      </div>
    </div>
  );
}
