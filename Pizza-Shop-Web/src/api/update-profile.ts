import { api } from "@/lib/axios";

interface UpdatedProfile {
  name: string
  description: string | null
}

export async function updatedProfile({ name, description }: UpdatedProfile) {
  await api.put('/profile', {
    name,
    description
  })
}