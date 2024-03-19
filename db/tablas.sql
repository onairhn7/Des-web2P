-- Active: 1705370176782@@localhost@5432@postgres@public

CREATE TABLE tbl_rol
(
    id SERIAL PRIMARY KEY,
    nombre_rol VARCHAR(200),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);

drop table tbl_usuarios;

truncate table tbl_usuarios;

create table tbl_usuarios
(
   nombre_usuario varchar (20) PRIMARY KEY,
   correo_electronico varchar (50),
   contrasena varchar (20),
   nombre varchar (200),
   apellido varchar (200),
   foto_perfil bytea,
   id_rol int,
   fecha_creacion TIMESTAMP DEFAULT current_timestamp,
   activo BOOLEAN DEFAULT true,
   constraint fk_id_rol FOREIGN key (id_rol) REFERENCES tbl_rol (id)
);

select * from tbl_usuarios; 


