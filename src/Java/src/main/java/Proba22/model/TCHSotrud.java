package Proba22.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proba22.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧСотруд
 */
@Entity(name = "IISProba22ТЧСотруд")
@Table(schema = "public", name = "ТЧСотруд")
public class TCHSotrud {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИОСотр")
    private String фиосотр;

    @Column(name = "ДолжнСотр")
    private String должнсотр;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrud")
    @Convert("Sotrud")
    @Column(name = "Сотруд", length = 16, unique = true, nullable = false)
    private UUID _sotrudid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrud", insertable = false, updatable = false)
    private Sotrud sotrud;


    public TCHSotrud() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИОСотр() {
      return фиосотр;
    }

    public void setФИОСотр(String фиосотр) {
      this.фиосотр = фиосотр;
    }

    public String getДолжнСотр() {
      return должнсотр;
    }

    public void setДолжнСотр(String должнсотр) {
      this.должнсотр = должнсотр;
    }


}