import ChatBot from "../../components/ChatBot";

export default function HealthAssistant() {
  return (
    <div className="p-6 bg-[#f5f9ff] min-h-screen">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-slate-800">Health Assistant</h1>
        <p className="text-slate-500 mt-1">WHO-guided health consultation chatbot</p>
      </div>
      <div className="max-w-2xl h-[600px]">
        <ChatBot />
      </div>
    </div>
  );
}