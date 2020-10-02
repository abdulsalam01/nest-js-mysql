import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("mahasiswa")
export class UserEntity {

    @PrimaryColumn()
    npm: string;

    @Column()
    nama: string;

    @Column()
    alamat: string;

    @Column()
    tgllahir: Date;

    @Column()
    sandi: string;

    @Column()
    email_orangtua: string;

    @Column()
    is_login: Boolean;
}
