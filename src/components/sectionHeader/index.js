import styles from '@/components/sectionHeader/sectionHeader.module.css'

export default function SectionHeader({ title, description }) {
    return (
      <div className={styles.center} >
        <div className={styles.container}>
          <h3>{title}</h3>
          <h2>{description}</h2>
        </div>
      </div>
    )
}