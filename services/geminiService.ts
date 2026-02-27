import { GeneratedIdea } from '../types';

export const generateEventIdea = async (topic: string): Promise<GeneratedIdea | null> => {
    // Mock implementation for now
    console.log(`Generating idea for topic: ${topic}`);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
        title: `Sesi ${topic} Santai`,
        description: `Sebuah pertemuan akrab untuk para penggemar ${topic} di kafe yang tenang.`,
        suggestedActivities: ['Diskusi Terbuka', 'Sesi Sharing', 'Networking Santai'],
    };
};
