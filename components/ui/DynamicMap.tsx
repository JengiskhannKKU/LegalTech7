import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full min-h-[400px] bg-gray-100 animate-pulse flex items-center justify-center">
            <p className="text-gray-400">Loading Map...</p>
        </div>
    ),
});

export default Map;
