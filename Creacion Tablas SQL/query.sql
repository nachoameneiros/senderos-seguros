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
  id bigint not null,
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
  id bigint not null,
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

-- Table: public.tb_reportes

-- DROP TABLE public.tb_reportes;

CREATE TABLE public.tb_reportes
(
  idalumno bigint,
  idagente bigint,
  asistencia character varying(60) NOT NULL,
  motivo character varying(255) NOT NULL
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.tb_reportes
  OWNER TO postgres;


-- Function: public.insert_alerta(bigint, numeric, numeric)

-- DROP FUNCTION public.insert_alerta(bigint, numeric, numeric);

CREATE OR REPLACE FUNCTION public.insert_alerta(
    p_idalumno bigint,
    p_latitud numeric,
    p_longitud numeric)
  RETURNS boolean AS
$BODY$
DECLARE rnt BOOLEAN;
DECLARE p_idagente bigint;
DECLARE distance numeric;
BEGIN
	rnt := (select true FROM tb_alertas WHERE fecha > NOW() - INTERVAL '5 minutes'  and tb_alertas.idalumno = p_idalumno);

	 IF (rnt is null) THEN
	 begin
		select tb_geo_agente.id , 
		tb_geo_agente.lat-p_latitud + tb_geo_agente.lng-p_longitud
		into p_idagente , distance
		from tb_geo_agente
		where tb_geo_agente.id not in 
		(SELECT tb_alertas.idagente FROM tb_alertas WHERE fecha > NOW() - INTERVAL '5 minutes')
		order by 2 asc limit 1;
		
		INSERT INTO tb_alertas(
		    idagente, lat, lng, idalumno , fecha)
		VALUES (p_idagente,p_latitud, p_longitud, p_idalumno , current_timestamp);		

		RETURN true;
	 end;
	 else
	 begin
		RETURN false;
	 end;
	 end if;
	 
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION public.insert_alerta(bigint, numeric, numeric)
  OWNER TO postgres;


