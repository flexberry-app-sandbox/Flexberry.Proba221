package Proba22.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proba22.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Сотруд
 */
@Entity(name = "IISProba22Сотруд")
@Table(schema = "public", name = "Сотруд")
public class Sotrud {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @OneToMany(mappedBy = "sotrud", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHSotrud> tchsotruds;


    public Sotrud() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}