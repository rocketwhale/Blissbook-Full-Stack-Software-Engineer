-- Rough mock of taking the TS types and making tables from the relationships
-- NOTE: this wasn't updated after-the-fact to account for changes to e.g.
-- displaying images for people, etc

CREATE TABLE documents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  publishedAt DATETIME DEFAULT NULL,
  lastPublishedAt DATETIME DEFAULT NULL,
  archivedAt DATETIME DEFAULT NULL
);

CREATE TABLE persons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

-- For the many-to-many relationship of `audienceMembers` in the TS type
CREATE TABLE document_audience_members (
  document_id INT,
  person_id INT,
  PRIMARY KEY (document_id, person_id),
  FOREIGN KEY (document_id) REFERENCES documents(id),
  FOREIGN KEY (person_id) REFERENCES persons(id)
);
