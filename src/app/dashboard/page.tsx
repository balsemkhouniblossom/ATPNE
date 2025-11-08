import StatsCard from '@/components/dashboard/StatsCard'
import MembersTable from '@/components/dashboard/MembersTable'
import DashboardHeader from '@/components/dashboard/DashboardHeader'
import EventsManager from '@/components/dashboard/EventsManager'

export default function DashboardPage() {
  return (
    <div>
      <DashboardHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <StatsCard title="Membres" value={124} delta={6} icon="users" />
        <StatsCard title="Événements" value={8} delta={-12} icon="events" />
        <StatsCard title="Projets" value={12} delta={3} icon="projects" />
      </div>

      <section>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">Membres récents</h3>
          <p className="text-sm text-gray-600">Derniers inscrits et interactions</p>
        </div>

        <MembersTable />
      </section>

      <section>
        <div className="mt-8">
          <EventsManager />
        </div>
      </section>
    </div>
  )
}
