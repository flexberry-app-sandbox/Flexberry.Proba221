package Proba22.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proba22.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ДолжнСотр
 */
@Entity(name = "IISProba22ДолжнСотр")
@Table(schema = "public", name = "ДолжнСотр")
public class DolzhnSotr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Должность")
    private String должность;

    @Column(name = "ФИОСотр")
    private String фиосотр;


    public DolzhnSotr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getДолжность() {
      return должность;
    }

    public void setДолжность(String должность) {
      this.должность = должность;
    }

    public String getФИОСотр() {
      return фиосотр;
    }

    public void setФИОСотр(String фиосотр) {
      this.фиосотр = фиосотр;
    }


}