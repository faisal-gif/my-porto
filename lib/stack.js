import { projects } from '@/data/projects'

// Nama teknologi di data skill dan data proyek tidak selalu identik
// ("React.js" vs "React", "Nest.js" vs "Nest.js"); bandingkan bentuk dasarnya.
export const norm = (name) => name.toLowerCase().replace(/\.js$/, '').replace(/[^a-z0-9]/g, '')

/** Listing yang memakai satu teknologi (dicocokkan lewat bentuk dasar). */
export const listingsUsing = (tech) => projects.filter((p) => p.stack.some((s) => norm(s) === norm(tech)))
