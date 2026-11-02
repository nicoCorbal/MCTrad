export default function FaqItem({ question, answer }) {
  return (
    <details className="faq-item group bg-white rounded-xl border border-gray-200 hover:border-blue-400 overflow-hidden">
      <summary className="cursor-pointer px-6 py-4 font-medium text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">
        {question}
      </summary>
      <div className="px-6 pb-5 text-gray-600 leading-relaxed">{answer}</div>
    </details>
  );
}
