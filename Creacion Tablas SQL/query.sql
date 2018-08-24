-- Table: public.tb_agente

-- DROP TABLE public.tb_agente;

CREATE TABLE public.tb_agente
(
  id integer NOT NULL DEFAULT nextval('tb_agente_id_seq'::regclass),
  nombre character varying,
  apellido character varying,
  password character varying,
  email character varying,
  idcolegio integer,
  dni bigint,
  CONSTRAINT tb_agente_pkey PRIMARY KEY (id),
  CONSTRAINT my_fk_idcolegio FOREIGN KEY (idcolegio)
      REFERENCES public.tb_escuela (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT tb_agente_email_key UNIQUE (email)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.tb_agente
  OWNER TO postgres;


-- Table: public.tb_alumnos

-- DROP TABLE public.tb_alumnos;

CREATE TABLE public.tb_alumnos
(
  id integer NOT NULL DEFAULT nextval('tb_alumno_id_seq'::regclass),
  nombre character varying,
  apellido character varying,
  password character varying,
  email character varying,
  idcolegio integer,
  curso character varying,
  CONSTRAINT tb_alumnos_pkey PRIMARY KEY (id),
  CONSTRAINT my_fk_idcolegio FOREIGN KEY (idcolegio)
      REFERENCES public.tb_escuela (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT tb_alumnos_username_key UNIQUE (email)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.tb_alumnos
  OWNER TO postgres;

-- Table: public.tb_escuela

-- DROP TABLE public.tb_escuela;

CREATE TABLE public.tb_escuela
(
  id integer NOT NULL DEFAULT nextval('tb_escuela_id_seq'::regclass),
  nombre character varying,
  password character varying,
  email character varying,
  visible smallint,
  lat numeric(10,6),
  lng numeric(10,6),
  CONSTRAINT tb_escuela_pkey PRIMARY KEY (id),
  CONSTRAINT tb_escuela_email_key UNIQUE (email)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.tb_escuela
  OWNER TO postgres;

-- Table: public.tb_geo_agente

-- DROP TABLE public.tb_geo_agente;

CREATE TABLE public.tb_geo_agente
(
  id bigint,
  lat numeric(10,6),
  lng numeric(10,6) DEFAULT NULL::numeric,
  CONSTRAINT my_fk_geo_agente FOREIGN KEY (id)
      REFERENCES public.tb_agente (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.tb_geo_agente
  OWNER TO postgres;



-- Table: public.tb_geo_alumnos

-- DROP TABLE public.tb_geo_alumnos;

CREATE TABLE public.tb_geo_alumnos
(
  id bigint,
  lat numeric(10,6),
  lng numeric(10,6) DEFAULT NULL::numeric,
  CONSTRAINT my_fk_geo_alumnos FOREIGN KEY (id)
      REFERENCES public.tb_alumnos (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.tb_geo_alumnos
  OWNER TO postgres;

-- Table: public.tb_local

-- DROP TABLE public.tb_local;

CREATE TABLE public.tb_local
(
  id bigint NOT NULL DEFAULT nextval('markers_id_seq'::regclass),
  name character varying(60) NOT NULL,
  address character varying(80) NOT NULL,
  lat numeric(10,6),
  lng numeric(10,6) DEFAULT NULL::numeric,
  type character varying(60) DEFAULT NULL::character varying,
  CONSTRAINT markers_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.tb_local
  OWNER TO postgres;




