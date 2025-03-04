import AiChat from '@/components/AiChat'

function Chat() {
  return (
    <div className="grid grid-cols-5 gap-10 h-screen overflow-hidden p-5">
  <div className="col-span-2 flex flex-col gap-2 h-full">
    <div className="w-full rounded bg-gray-300 flex-1 p-1">Book</div>
    <div className="w-full rounded bg-gray-300 flex-[4] p-1 overflow-auto" id="RAGpreview">
      preview
    </div>
    <div className="w-full rounded bg-gray-300 flex-[2] p-1">RAG info</div>
  </div>

  <div className="col-span-3 h-full overflow-hidden">
    <AiChat />
  </div>
</div>

  )
}

export default Chat