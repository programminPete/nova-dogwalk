-- Users Table
CREATE TABLE IF NOT EXISTS user (
  ref_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), 
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT, 
  password TEXT NOT NULL, -- hash
  profile_image_url TEXT,
  address TEXT,
  address_line_2 TEXT,
  city TEXT,
  state TEXT,
  zip TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  removed_at TIMESTAMP
  updated_at TIMESTAMP
);

-- Dogs Table
CREATE TABLE IF NOT EXISTS dog (
  ref_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), 
  user_ref_id UUID NOT NULL REFERENCES user(ref_id), -- Foreign Key to Users
  name TEXT NOT NULL,
  breed TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  removed_at TIMESTAMP
  updated_at TIMESTAMP
);

-- Appointments Table
CREATE TABLE IF NOT EXISTS appointment (
  ref_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_ref_id UUID NOT NULL REFERENCES user(ref_id), --  Foreign Key to Users
  dog_ref_id UUID NOT NULL REFERENCES dog(ref_id), -- Foreign Key to Dogs
  start_time TIMESTAMP NOT NULL, 
  end_time TIMESTAMP NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  removed_at TIMESTAMP
  updated_at TIMESTAMP
);
