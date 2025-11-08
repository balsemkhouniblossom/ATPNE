# Script de création des tables Supabase

Ce script SQL doit être exécuté dans votre instance Supabase pour créer la structure de base de données nécessaire au site ATPNE.

## Instructions

1. Connectez-vous à votre projet Supabase
2. Allez dans l'onglet "SQL Editor"
3. Copiez-collez et exécutez les requêtes ci-dessous

```sql
-- Création de la table des membres
CREATE TABLE members (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    interests TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Création de la table des actualités
CREATE TABLE news (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    image_url VARCHAR(500),
    category VARCHAR(100) NOT NULL,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Création de la table des projets
CREATE TABLE projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    objectives TEXT NOT NULL,
    results TEXT,
    location VARCHAR(255),
    image_url VARCHAR(500),
    status VARCHAR(20) CHECK (status IN ('planned', 'ongoing', 'completed')) DEFAULT 'planned',
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Création de la table des événements
CREATE TABLE events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    date TIMESTAMP WITH TIME ZONE NOT NULL,
    location VARCHAR(255) NOT NULL,
    image_url VARCHAR(500),
    max_participants INTEGER,
    current_participants INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Création de la table de la galerie
CREATE TABLE gallery (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(500) NOT NULL,
    category VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Création de la table des messages de contact
CREATE TABLE contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ajout des fonctions de mise à jour automatique des timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers pour la mise à jour automatique
CREATE TRIGGER update_members_updated_at BEFORE UPDATE ON members
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insertion de données d'exemple
INSERT INTO news (title, content, excerpt, category, published, image_url) VALUES
('Plantation de 200 arbres dans la région de Korba', 'Aujourd\'hui, nous avons organisé une grande journée de plantation avec nos bénévoles...', 'Une journée mémorable où nos bénévoles ont planté 200 nouveaux arbres pour contribuer à la reforestation.', 'Action environnementale', true, 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop'),
('Sensibilisation dans les écoles locales', 'Notre programme éducatif a été lancé dans 5 écoles primaires de Korba...', 'Programme éducatif lancé dans 5 écoles de Korba pour sensibiliser les enfants à la protection de l\'environnement.', 'Éducation', true, 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop'),
('Nettoyage des plages de Korba', 'Plus de 100 participants ont rejoint notre action de nettoyage des plages...', 'Action collective de nettoyage des plages avec plus de 100 participants pour préserver notre littoral.', 'Action citoyenne', true, 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop');

INSERT INTO projects (title, description, objectives, location, image_url, status, start_date) VALUES
('Reforestation de la forêt de Korba', 'Projet de plantation de 1000 arbres indigènes pour restaurer l\'écosystème forestier local.', 'Restaurer la biodiversité locale et lutter contre l\'érosion des sols.', 'Forêt de Korba, Tunisie', 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop', 'ongoing', '2024-01-01'),
('Protection de la biodiversité marine', 'Initiative pour la préservation des espèces marines menacées le long de la côte de Korba.', 'Protéger les espèces marines locales et sensibiliser les pêcheurs.', 'Côte de Korba, Tunisie', 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop', 'planned', '2024-03-01'),
('Éducation environnementale scolaire', 'Programme d\'éducation environnementale dans 15 écoles primaires de la région.', 'Sensibiliser 2000 élèves aux enjeux environnementaux.', 'Écoles de Korba et environs', 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop', 'completed', '2023-09-01');

-- Configuration des politiques RLS (Row Level Security)
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Politiques pour la lecture publique des contenus
CREATE POLICY "Allow public read access on news" ON news FOR SELECT USING (published = true);
CREATE POLICY "Allow public read access on projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access on events" ON events FOR SELECT USING (true);
CREATE POLICY "Allow public read access on gallery" ON gallery FOR SELECT USING (true);

-- Politiques pour l'insertion des nouveaux membres et messages
CREATE POLICY "Allow public insert on members" ON members FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on contact_messages" ON contact_messages FOR INSERT WITH CHECK (true);
```

## Configuration des variables d'environnement

Après avoir créé les tables, copiez les informations de connexion Supabase dans votre fichier `.env.local` :

```bash
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé_anon_supabase
SUPABASE_SERVICE_ROLE_KEY=votre_clé_service_role
```
